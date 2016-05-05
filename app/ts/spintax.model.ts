import {SpintaxElement} from './spintaxElement.model'

export class Spintax {
    public spintax: string;
    public elements: SpintaxElement[];
    public formatted_text:string;
    
    constructor(sp:string) {
        this.spintax = sp;
        this.elements = [];
        this.formatted_text = sp;
        this.breakSpintax();
    }
    
    printSpintax() {
        return this.spintax;
    }
    
    updateSpintax(val:string) {
        this.spintax = val;
        this.breakSpintax();
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
            
                this.spintax = this.spintax.replace(m[0], tempEle.token);
                this.elements.push(tempEle);  
            }
            if(flag) {
               flag = !flag;
               sp = this.spintax;
               level++; 
            }
            else {
                break;
            }
        }
        
        //TODO: Need to take care of stray words, level 0
        
        console.log(this.spintax);
    }
}