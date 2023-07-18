import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-countryinformation',
  templateUrl: './countryinformation.component.html',
  styleUrls: ['./countryinformation.component.css'],
})
export class CountryinformationComponent {
  heading: string = 'Country Information';

  @Input() countryName!: string;
  @Input() capital!: string;
  @Input() region!: string;
  @Input() incomeLevel!: string;
  @Input() latitude!: string;
  @Input() longitude!: string;
}
