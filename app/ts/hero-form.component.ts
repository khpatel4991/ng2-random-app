import {Component} from '@angular/core';
import {NgForm} from '@angular/common';

import {Hero} from'./hero.model'

@Component({
    selector: 'hero-form',
    templateUrl: 'app/ts/hero-form.component.html'
})

export class HeroFormComponent {
    powers = ['RS', 'SF', 'SH', 'WC'];
    
    model = new Hero(15, 'Kashyap', this.powers[0], 'LL');
    active = true;
    submitted = false;
    
    onSubmit() {
        this.submitted = true;
    }
    
    addHero() {
        this.model = new Hero(16, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    
    //Remove this when we're done
    //get diagnostic() { return JSON.stringify(this.model); }
    
}