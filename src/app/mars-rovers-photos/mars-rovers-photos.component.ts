import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NasaApiService } from '../nasa-api.service';
import { DtoGetPhotos } from './DataModel/DtoGetPhotos';
import { MarsPhoto } from './DataModel/MarsPhoto';

@Component({
  selector: 'app-mars-rovers-photos',
  templateUrl: './mars-rovers-photos.component.html',
  styleUrls: ['./mars-rovers-photos.component.css']
})
export class MarsRoversPhotosComponent implements OnInit {
  response$!: Observable<DtoGetPhotos>;
  firstImageUrl!: string;

  constructor(public nasaApiService: NasaApiService) { }

  ngOnInit(): void {
  }


  requestPhotos(marsDate: string): void {

    console.log(marsDate);
    
    this.response$ = this.nasaApiService.getMarsRoverPhotos(marsDate);

    this.response$.subscribe(
      data => {
        console.log(data);
        this.firstImageUrl = data.photos[0].img_src;
      }
    )

  }
}
