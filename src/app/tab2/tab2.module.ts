import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import{ SwiperModule }from 'swiper/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { Tab2PageRoutingModule } from './tab2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: Tab2Page
      }
    ])
  ]
  ,
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
