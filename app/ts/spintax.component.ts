import { Component, OnInit } from '@angular/core';
import { Spintax } from './spintax.model'


@Component({
    selector: 'spintax',
    templateUrl: 'app/ts/spintax.component.html'
})
export class SpintaxComponent implements OnInit {
    
    public spintaxObj:Spintax;
    public tempSpintax:string;
    
    constructor(  ) {
        this.spintaxObj = new Spintax('');
        this.tempSpintax = `
        <h3>{Rumored News on Yahoo Uncovered | Unanswered Issues With Yahoo Disclosed | Yahoo Secrets That No One Else Knows About | Things You Should Know About Yahoo | Life After Yahoo}</h3>  {<h5>{What You Should Do About Yahoo Starting in the Next 6 Minutes | The Basic{sadasd| adsfsad}s of Yahoo You Can Learn From Starting Right Away | Yahoo - Is it a Scam?}</h5>|} <p>  You'll now also have the capacity to configure outlook for yahoo.  That is really all about the best way to uninstall Yahoo toolbar. Afterward You obtain some easy software that may automate your Yahoo Groups postings for you. </p><p>Email is a way of {comm|unic} ating online.  We're giving savvy and simple to utilize Yahoo customer service for the above mentioned issues.  If you are ready to create a change to a more effective way of conducting business, you'll welcome the outcomes of Outlook and also the use of your Yahoo email account.  In case you are receiving an e-mail from a Yahoo e-mail account it's important to realize that you can perform a reverse e-mail search to realize where they came. </p> <p>If you're a frequent user of Yahoo Mail and would like to grow the professional appearance of your emails (or maybe you would just like to bring some dash of enjoyment and creativity in your emails), then you've stumbled upon a fantastic article! This will reveal how you're able to add images, photos or logos within the signature part of the new Yahoo Mail.  Since, it isn't feasible to include each of the places on earth in a Map database, so you could not locate a specific address if it's not in Yahoo database. Plaxo.com will enable you to send out the most recent information on you and also your business via email.</p>
        `
    }
    
    getFormattedText() {
        return this.spintaxObj.spintax;
    }
    
    setSpintax(val:string) {
        this.spintaxObj.updateSpintax(val);
    }
    
    getOptions() {
        return this.spintaxObj.elements.map(n => n.syns.join('|') );
    }

    ngOnInit() {
        console.log('Spintax Comp Init');
    }
}