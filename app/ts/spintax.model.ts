import {SpintaxElement} from './spintaxElement.model'

export class Spintax {
    public spintax: string;
    public elements: SpintaxElement[];
    public formatted_text:string;
    
    constructor(sp:string) {
        this.spintax = sp;
        this.elements = [];
        this.formatted_text = sp;
        this.parseSpintax();
    }
    
    printSpintax() {
        return this.spintax;
    }
    
    updateSpintax(val:string) {
        this.spintax = val;
        this.parseSpintax();
    }
    
    
    parseSpintax() {
        let sp = this.spintax;
        let re = /{([^{}]*)}/g;
        let m: RegExpExecArray;
        let tempEle: SpintaxElement;
        let flag = false;
        
        while(1) {
            while ((m = re.exec(sp)) !== null) {
                flag = true;
                if (m.index === re.lastIndex) {
                    re.lastIndex++;
                }
            
                console.log(m);
                tempEle = new SpintaxElement(m[0]);
            
                this.spintax = this.spintax.replace(m[0], tempEle.token);
                this.elements.push(tempEle);  
            }
            if(flag) {
               flag = !flag;
               sp = this.spintax; 
            }
            else {
                break;
            }
        }     
    }
}