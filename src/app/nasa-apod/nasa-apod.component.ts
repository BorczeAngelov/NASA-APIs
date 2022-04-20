import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { NasaApiService, ReturnObject } from '../nasa-api.service';

@Component({
  selector: 'app-nasa-apod',
  templateUrl: './nasa-apod.component.html',
  styleUrls: ['./nasa-apod.component.css']
})
export class NasaApodComponent implements OnInit {

  response$!: Observable<ReturnObject>;
  myURL!: string;
  imageToShow!: Observable<any>;


  constructor(public nasaApiService: NasaApiService) {
  }

  ngOnInit(): void {
  }


  sendRequest(): void {
    this.response$ = this.nasaApiService.getPictureOfDay();
    this.response$.subscribe(
      pipe((res: ReturnObject) => {
        this.myURL = res.url;

        console.log(this.myURL);
      }))
  }

  displayImage(): void {
    console.log(this.myURL);

    this.nasaApiService.loadImage(this.myURL).subscribe(
      res => this.imageToShow = res
    )
  }
}
