import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedTabIndex = new UntypedFormControl(0);




  onCheckDemo(tabIndex: number): void {
    this.selectedTabIndex.setValue(tabIndex);
  }
}
