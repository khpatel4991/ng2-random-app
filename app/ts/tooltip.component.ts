import {Component} from '@angular/core'

@Component({
    selector: 'tooltip',
    templateUrl: 'app/ts/tooltip.component.html'
})

export class TooltipComponent {
    title = 'Tootltip';
    public elements:string[]; 
    constructor(syns:string[]) {
        this.elements = syns;
    }
    
    sp_elements = ['yahoo', 'google', 'msft'];
    status:boolean;
    
    addEntry(newEntry:string) {
        if (this.elements.indexOf(newEntry) < 0) {
            this.elements.push(newEntry);   
        }
    }
    generateSpintax() {
        return '{' + this.sp_elements.join('|') + '}';
    }
    
    
}