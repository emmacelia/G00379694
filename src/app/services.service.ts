import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: "root",
})
export class ServicesService {

    constructor(private http:HttpClient) { }

    GetWeatherData():Observable<any>{

        return this.http.get("https://api.openweathermap.org/data/2.5/weather?q=Galway&units=metric&APPID=946a963bccac451e32e4ef776288485c");
      
        }
   

    
}
