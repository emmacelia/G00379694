import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import SwiperCore, { Autoplay, Keyboard, Pagination, Scrollbar, Zoom } from 'swiper';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

SwiperCore.use([Autoplay, Keyboard, Pagination, Scrollbar, Zoom]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Tab1Page {

  //we put this in the constructor to use the in app browser
  constructor(private iab : InAppBrowser) {}

  //the following are methods used to access the websites
  openHard(){
    this.iab.create('https://www.thehardiman.ie/?msclkid=1bec960680b91d22bf7ef477a7c7ac58'); 

}
OpenEyre(){
  this.iab.create('https://www.eyresquarehotel.com/'); 
}

OpenG(){
  this.iab.create('https://www.thegalmont.com/en/'); 

}





}

