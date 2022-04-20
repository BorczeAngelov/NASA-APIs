import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { DtoGetPhotos } from './mars-rovers-photos/DataModel/DtoGetPhotos';
import { MarsPhoto } from './mars-rovers-photos/DataModel/MarsPhoto';
import { ReturnObject } from './nasa-apod/DtoApod';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  apodUrl: string = "https://api.nasa.gov/planetary/apod";
  // api_key: string = "DEMO_KEY"; //Note: you can replace value with your own api_key
  api_key: string = "GylTbFmuea3pDiZVRBJkzqCzLiC9VE2hYhHSegyc";

  marsPhotosUrl: string = "https://mars-photos.herokuapp.com/api/v1"
  roverName = "Perseverance";

  constructor(private http: HttpClient) { }

  getTodaysPicture(): Observable<ReturnObject> {
    return this.http.get<ReturnObject>(this.apodUrl + '?api_key=' + this.api_key);
  }

  getPictureOfDate(date: string): Observable<ReturnObject> {
    //TODO: add Assert to check the date format  yyyy-MM-dd
    return this.http.get<ReturnObject>(this.apodUrl + '?api_key=' + this.api_key + "&date=" + date);
  }

  getMarsRoverPhotos(marsDay: string): Observable<DtoGetPhotos> {    
    return this.http.get<DtoGetPhotos>(this.marsPhotosUrl + "/rovers/" + this.roverName + "/photos?sol=" + marsDay);
  }
}

