import {Component} from '@angular/core'

@Component({
    selector: 'tooltip',
    templateUrl: 'app/ts/tooltip.component.html'
})

export class TooltipComponent {
    title = 'Tootltip';
    sp_elements = ['yahoo', 'google', 'msft'];
    status:boolean;
    
    addEntry(newEntry:string) {
        if (this.sp_elements.indexOf(newEntry) < 0) {
            this.sp_elements.push(newEntry);   
        }
    }
    generateSpintax() {
        return '{' + this.sp_elements.join('|') + '}';
    }
    
    
}