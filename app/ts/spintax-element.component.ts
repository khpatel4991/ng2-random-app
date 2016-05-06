import { Component, OnInit } from '@angular/core';
import { SpintaxElement } from './spintax-element.model'

@Component({
    selector: 'spintax-element',
    templateUrl: 'app/ts/spintax-element.component.html'
})
export class SpintaxElementComponent { 
    
    public spEle:SpintaxElement;
    
    setElement(spEle:SpintaxElement) {
        this.spEle = spEle;
    }
    
 }