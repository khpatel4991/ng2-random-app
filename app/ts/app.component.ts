import {Component} from '@angular/core';
import {TooltipComponent} from './tooltip.component'
import {HeroFormComponent} from './hero-form.component'

@Component({
    selector: 'my-app',
    template: `
    <h1>Spintax</h1>
    <input
        #age_input
        [value]="age"
        (keyup)="onKeyUpHandler(age_input.value)">
        <div>Hello, {{name}} {{age}} !</div>
        
        <h2>This is a sample for tooltip</h2>
        <div><tooltip></tooltip></div>
        <div><hero-form></hero-form></div>
    `,
    directives: [
        TooltipComponent,
        HeroFormComponent,
    ]
})
export class AppComponent { 
    name:string;
    age:number;
    
    constructor() {
        this.name = 'Kashyap';
        this.age = 24;
    }
    
    onKeyUpHandler(val: number) {
        this.age = val;
    }
    changeName() {
        name = 'Random'
    }
    
}
