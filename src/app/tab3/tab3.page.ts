import { Component } from '@angular/core';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
 //we put the inappbrowser in order use it 
  constructor(private iab : InAppBrowser){}

  //methods to open the website 
  openPage(){
    this.iab.create('https://www.galwaytourism.ie/the-spanish-arch/'); 

}
OpenCat(){
  this.iab.create('https://www.galwaycathedral.ie/'); 
}

OpenSalt(){
  this.iab.create('https://www.salthill.com/'); 

}

}
 

