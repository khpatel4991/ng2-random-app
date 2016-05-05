import {Tokenizer} from './tokenizer'

export class SpintaxElement {
   
    public syns:string[];
    public active:boolean;
    public token:string;
    
    constructor(str:string) {
        
        if(str.startsWith('{') && str.endsWith('}')) {
            console.log(str);
            this.syns = str.slice(1, -1).split('|');   
        }
        this.active = true;
        this.token = Tokenizer.getNewToken();
    }
}