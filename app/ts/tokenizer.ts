export class Tokenizer {
    static count : number = 0;
    
    static getNewToken() {
        return '[(' + Tokenizer.count++ + ')]';
    }
            
}