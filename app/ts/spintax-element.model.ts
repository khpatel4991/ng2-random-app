import {Tokenizer} from './tokenizer'

export class SpintaxElement {
   
    public syns:string[];
    public active:boolean;
    public token:string;
    public level:number;
    
    constructor(str:string, num:number) {
        
        if(str.startsWith('{') && str.endsWith('}')) {
            this.syns = str.slice(1, -1).split('|');   
        }
        this.active = true;
        this.level = num;
        this.token = Tokenizer.getNewToken();
    }   
    
    toString() {
        if(this.syns.length > 1) {
            return '{' + this.syns.join('|') + '}';
        }
        else {
            return this.syns.join();
        }
    }
    
    tooltipHtml() {
        let str:string;
        str += '<ul>'
        this.syns.forEach((element) => str += `<li>${element}</li>`)
        str += '</ul>'
        console.log(str);
    }
     
}