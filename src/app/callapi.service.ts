import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  constructor(private http: HttpClient) { }

  getData(location:any){
    return this.http.get(
        'https://api.openweathermap.org/data/2.5/weather?q='+location+'&appid=445d618a2eb486a4694ce5126cb0bace' 
    );
}
}
