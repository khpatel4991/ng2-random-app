import {SpintaxElement} from './spintax-element.model'

export class Spintax {
    public spintax: string;
    public elements: SpintaxElement[];
        
    constructor(sp:string) {
        this.spintax = sp;
        this.elements = [];
        this.breakSpintax();
        //this.newTest();
    }
    
    newTest() {
        let sp = this.spintax;
        let elements: SpintaxElement[];
        //sp.split(//g)
        let level = 0;
        sp.split(/\s+/g)
            .filter((str) => str !== '')
            .forEach((element) => {
                element.split(/([{}\|])/g)
                    .filter((str) => str !== '')
                    .forEach((element) => {
                        switch(element) {
                            case '{':
                                
                                break;
                            case '}':
                                break;
                            case '|':
                                console.log(element);
                                break;
                            default:
                                
                                console.log(element + ' :default')
                            
                        }
                    });
            });
    }
    
    isPunctuation(str:string) {
        return (['.', ',', '?', '!'].indexOf(str) > -1);
    }
    
    
    getElements() {
        return this.elements.map(n => n);
    }
    
    printSpintax() {
        return this.spintax;
    }
    
    updateSpintax(val:string) {
        this.spintax = val;
        this.breakSpintax();
        //this.newTest();
    }
    
    buildSpintax() {
        let sp = this.spintax;                    
    }
    
    
    breakSpintax() {
        let sp = this.spintax;
        let re = /{([^{}]*)}/g;
        let m: RegExpExecArray;
        let tempEle: SpintaxElement;
        let flag = false;
        let level = 1;
        
        while(1) {
            while ((m = re.exec(sp)) !== null) {
                flag = true;
                if (m.index === re.lastIndex) {
                    re.lastIndex++;
                }
            
                tempEle = new SpintaxElement(m[0], level);
            
                sp = sp.replace(m[0], tempEle.token);
                this.elements.push(tempEle);  
            }
            if(flag) {
               flag = !flag;
               level++; 
            }
            else {
                break;
            }
        }
        
        //TODO: Need to take care of stray words, level 0
    }
    
}