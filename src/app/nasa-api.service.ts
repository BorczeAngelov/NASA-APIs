import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ReturnObject } from './ReturnObject';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  api_key: string = "DEMO_KEY"; //Note: you can replace value with your own api_key

  constructor(private http: HttpClient) { }


  getPictureOfDay(): Observable<ReturnObject> {

    return this.http.get<ReturnObject>('https://api.nasa.gov/planetary/apod?api_key=' + this.api_key);
  }


  loadImage(imageUrl: string): Observable<any> {

    return this.http.get<Blob>(imageUrl).pipe(
      map((res: Blob) => {
        return this.createImageFromBlob(res);
      })
    );
    
    return this.http.get<Blob>(imageUrl);
  }

  private createImageFromBlob(image: Blob): any {
    let reader = new FileReader();


    reader.readAsDataURL(image);
    return reader.result;
  }

}

