import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
  
})
export class WeatherService {

baseURL = "https://https://www.weatherapi.com/my/";
apiKey = "<dcc77e6d87e3405782d191851222904>";


  constructor(private http: HttpClient) {}

public fetchLocationData(latlong)

}
