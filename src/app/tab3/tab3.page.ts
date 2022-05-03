import { Component } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
 
  constructor(private iab : InAppBrowser){}

  openPage(){
    this.iab.create('https://www.galwaytourism.ie/the-spanish-arch/'); // --> Change URL here

}
OpenCat(){
  this.iab.create('https://www.galwaycathedral.ie/'); // --> Change URL here
}

OpenSalt(){
  this.iab.create('https://www.salthill.com/'); // --> Change URL here

}

}
 

