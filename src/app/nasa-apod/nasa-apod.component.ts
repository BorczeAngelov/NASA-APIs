import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { NasaApiService } from '../nasa-api.service';
import { ReturnObject } from "../ReturnObject";

@Component({
  selector: 'app-nasa-apod',
  templateUrl: './nasa-apod.component.html',
  styleUrls: ['./nasa-apod.component.css']
})
export class NasaApodComponent implements OnInit {

  response$!: Observable<ReturnObject>;
  imageToShow!: string;


  constructor(public nasaApiService: NasaApiService) {
  }

  ngOnInit(): void {
  }


  sendRequest(): void {
    this.response$ = this.nasaApiService.getPictureOfDay();
    this.response$.subscribe(
      pipe((res: ReturnObject) => {
        this.imageToShow = res.url;

        console.log(this.imageToShow);
      }))
  }
}
