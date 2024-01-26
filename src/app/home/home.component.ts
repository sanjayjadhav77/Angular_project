import { Component } from '@angular/core';
const jsonData = {
  partName: 'Tata ultra',
  location: 1,
  passCount: 1500,
  failCount: 25
};
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userData = {
    partName: '',
    location: 0,
    passCount: 0,
    failCount: 0
  };

  // Set the initial data from the JSON object
  ngOnInit() {
    this.userData = { ...jsonData }; // Spread operator to copy values
  }
}
