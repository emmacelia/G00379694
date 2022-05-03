import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import {InAppBrowser} from '@ionic-native/in-app-browser/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { HttpClientModule } from "@angular/common/http";
import { Tab2Page } from './tab2/tab2.page';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(), 
    AppRoutingModule, 
    FormsModule,
    HttpClientModule
  ],
  providers: [
    InAppBrowser,
    CallNumber,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],

})
export class AppModule {}