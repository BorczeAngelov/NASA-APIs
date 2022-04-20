import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  api_key: string = "DEMO_KEY"; //Note: you can replace value with your own api_key

  constructor(private http: HttpClient) { }


  getPictureOfDay(): Observable<ReturnObject> {

    return this.http.get<ReturnObject>('https://api.nasa.gov/planetary/apod?api_key=' + this.api_key);
  }
}



export interface ReturnObject {
  //TODO: improve order of props

  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}