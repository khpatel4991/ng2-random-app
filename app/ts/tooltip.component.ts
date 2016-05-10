import {Component, ChangeDetectionStrategy} from '@angular/core'
import {SpintaxElement} from "./spintax-element.model";
import {TOOLTIP_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";

//let template = require('./qtip.html/');

@Component({
    selector: 'tooltip-d',
    templateUrl: 'app/ts/tooltip.component.html',
    inputs: ["element"],
    directives: [TOOLTIP_DIRECTIVES],
    styleUrls: ['app/ts/tooltip.component.css']
})

export class TooltipComponent {
    title = 'Tootltip';
    public element:SpintaxElement;
    //public synsHtml:string = template;

    /*addEntry(newEntry:string) {
        if (this.elements.indexOf(newEntry) < 0) {
            this.elements.push(newEntry);
        }
    }*/

}
