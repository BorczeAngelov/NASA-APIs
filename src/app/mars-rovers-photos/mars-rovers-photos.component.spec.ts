import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsRoversPhotosComponent } from './mars-rovers-photos.component';

describe('MarsRoversPhotosComponent', () => {
  let component: MarsRoversPhotosComponent;
  let fixture: ComponentFixture<MarsRoversPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarsRoversPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsRoversPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
