import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReturnObject } from './nasa-apod/DtoApod';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  
  apodUrl: string = "https://api.nasa.gov/planetary/apod";
  api_key: string = "DEMO_KEY"; //Note: you can replace value with your own api_key

  constructor(private http: HttpClient) { }


  getPictureOfDay(): Observable<ReturnObject> {

    return this.http.get<ReturnObject>(this.apodUrl + '?api_key=' + this.api_key);
  }
}

