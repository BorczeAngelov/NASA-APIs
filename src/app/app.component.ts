import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedTabIndex = new FormControl(0);




  onCheckDemo(tabIndex: number): void {
    this.selectedTabIndex.setValue(tabIndex);
  }
}
