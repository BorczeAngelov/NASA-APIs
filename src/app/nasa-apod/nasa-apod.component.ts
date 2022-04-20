import { Component, OnInit } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { NasaApiService } from '../nasa-api.service';
import { ReturnObject } from "./DtoApod";
import { formatDate } from '@angular/common';

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


  dateChanged(date: string): void {
    var newDate = formatDate(date, 'yyyy-MM-dd', 'en');

    this.response$ = this.nasaApiService.getPictureOfDate(newDate);    
    this.response$.subscribe(
      pipe((res: ReturnObject) => {
        this.imageToShow = res.url;

        console.log(this.imageToShow);
      }))
  }
}
