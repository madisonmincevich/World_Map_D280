import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-countryinformation',
  templateUrl: './countryinformation.component.html',
  styleUrls: ['./countryinformation.component.css'],
})
export class CountryinformationComponent {
  @Input() name!: string;
  @Input() capital!: string;
  @Input() region!: string;
  @Input() income!: string;
  @Input() latitude!: string;
  @Input() longitude!: string;
}
