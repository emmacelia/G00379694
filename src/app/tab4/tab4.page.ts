import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
import { Observable } from 'rxjs';
import { ServicesService } from '../services.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  //allows us to use the Service
  constructor(private service: ServicesService) { }

  WeatherData: any;

  //when the weather page is opened the following happens 
  ngOnInit() {
    
    //calls the getweatherdata method 
    this.service.GetWeatherData().subscribe(data => {
      console.log(data);
      this.WeatherData = data;
    });

  }
}


