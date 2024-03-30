import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NasaApiService } from '../nasa-api.service';
import { DtoGetPhotos } from './DataModel/DtoGetPhotos';

@Component({
  selector: 'app-mars-rovers-photos',
  templateUrl: './mars-rovers-photos.component.html',
  styleUrls: ['./mars-rovers-photos.component.css']
})
export class MarsRoversPhotosComponent implements OnInit {
  response$!: Observable<DtoGetPhotos>;
  firstImageUrl!: string;
  dateOnLanding = "2021-02-19";

  selectedDate?: Date;
  minDate?: Date;
  maxDate?: Date;

  imagesWidth?: number = 200;

  constructor(public nasaApiService: NasaApiService) {
      
    const helper = new Date();

    this.minDate = new Date(this.dateOnLanding);
    this.maxDate = helper;
    this.maxDate.setDate(helper.getDate() - 3);
  }

  ngOnInit(): void {
  }

  widthChanged(width: number){
    this.imagesWidth = width;
    console.log(width)
    return `${width}`;
  }

  dayOnLanding(): void {
    this.requestPhotos(this.dateOnLanding);
    this.selectedDate = new Date(this.dateOnLanding);
  }

  dateChanged(): void {
    if (this.selectedDate) {
      var newDate = formatDate(this.selectedDate, 'yyyy-MM-dd', 'en');
      this.requestPhotos(newDate);
    }
  }

  requestPhotos(earthDate: string) {
    this.response$ = this.nasaApiService.getMarsRoverPhotos(earthDate);
    this.response$.subscribe(
      data => {
        console.log(data);
        this.firstImageUrl = data.photos[0].img_src;
      }
    );
  }
}
