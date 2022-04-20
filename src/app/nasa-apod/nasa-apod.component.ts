import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NasaApiService, ReturnObject } from '../nasa-api.service';

@Component({
  selector: 'app-nasa-apod',
  templateUrl: './nasa-apod.component.html',
  styleUrls: ['./nasa-apod.component.css']
})
export class NasaApodComponent implements OnInit {

  response$!: Observable<ReturnObject>;


  constructor(public nasaApiService: NasaApiService) {
  }

  ngOnInit(): void {
  }


  sendRequest(): void {
    this.response$ = this.nasaApiService.getPictureOfDay();
    console.log(this.response$);
    console.log(JSON.stringify(this.response$));


    // this.response$.subscribe(data => console.log(data))
  }
}
