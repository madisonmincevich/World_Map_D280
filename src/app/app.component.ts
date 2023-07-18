import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Interactive World Map';

  countryName!: string;
  capital!: string;
  region!: string;
  incomeLevel!: string;
  latitude!: string;
  longitude!: string;

  onCountryNameChange(value: string) {
    this.countryName = value;
  }

  onCapitalChange(value: string) {
    this.capital = value;
  }

  onRegionChange(value: string) {
    this.region = value;
  }

  onIncomeLevelChange(value: string) {
    this.incomeLevel = value;
  }

  onLatitudeChange(value: string) {
    this.latitude = value;
  }

  onLongitudeChange(value: string) {
    this.longitude = value;
  }
}
