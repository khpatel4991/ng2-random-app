import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';

import { Spintax } from './spintax.model'
import { SpintaxElementComponent } from './spintax-element.component'

@Component({
    selector: 'spintax',
    templateUrl: 'app/ts/spintax.component.html',
    directives: [SpintaxElementComponent, CORE_DIRECTIVES, FORM_DIRECTIVES],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: [`
    /* Specify styling for tooltip contents */
    .tooltip.customClass .tooltip-inner {
        color: #880000;
        background-color: #ffff66;
        box-shadow: 0 6px 12px rgba(0,0,0,.175);
    }
    /* Hide arrow */
    .tooltip.customClass .tooltip-arrow {
        display: none;
    }
  `]
})
export class SpintaxComponent implements OnInit {
    
    public spintaxObj:Spintax;
    public userInput:string;
    
    public htmltt:string = '<strong>STRONG</strong>'
     
    constructor(  ) {
        this.userInput = 'This is a simple {A{1|2}|B|C}.'
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
    
    showList(a:any,b:number) {
        console.log(a);
        console.log(b);
    }
    ngOnInit() {
        console.log('Spintax Comp Init');
    }
}