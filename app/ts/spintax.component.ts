import {Component, OnInit} from '@angular/core';

import {Spintax} from './spintax.model'
import {SpintaxElement} from "./spintax-element.model";
import {SpintaxElementComponent} from './spintax-element.component'
import {TooltipComponent} from "./tooltip.component";

@Component({
    selector: 'spintax',
    templateUrl: 'app/ts/spintax.component.html',
    directives: [SpintaxElementComponent, TooltipComponent],
    styleUrls: ['app/ts/spintax.component.css']
})
export class SpintaxComponent implements OnInit {

    public spintaxObj:Spintax;
    public userInput:string;
    public selectedEle:SpintaxElement;
    public showT:boolean = false;

    constructor() {
        this.userInput = 'This is a simple {A{1|2}|B|C}.';
        this.spintaxObj = new Spintax(this.userInput);
    }

    getFormattedText() {
        return this.spintaxObj.spintax;
    }

    setSpintax(val:string) {
        this.spintaxObj.updateSpintax(val);
    }

    getOptions() {
        return this.spintaxObj.getElements();
    }

    showTooltip(b:SpintaxElement) {
        this.selectedEle = b;
        this.showT = true;
        console.log('Coming');
    }
    ngOnInit() {
        console.log('Spintax Comp Init');
    }
}
