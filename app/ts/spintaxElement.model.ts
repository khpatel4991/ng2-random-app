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
}