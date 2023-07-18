import { Component, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-worldmap',
  templateUrl: './worldmap.component.html',
  styleUrls: ['./worldmap.component.css'],
})
export class WorldmapComponent {
  over: string = 'Hovering not working';

  @Output() name = new EventEmitter();
  @Output() capital = new EventEmitter();
  @Output() region = new EventEmitter();
  @Output() income = new EventEmitter();
  @Output() latitude = new EventEmitter();
  @Output() longitude = new EventEmitter();

  constructor(private apiService: ApiService) {}

  onSelectedCountry(event: MouseEvent) {
    const target = event.target as SVGElement;
    const id = target.id;
    console.log(`Clicked element ID: ${id}`);

    this.apiService.fetchCountryData(id).subscribe((info: any) => {
      let res = info[1][0];
      this.name.emit(res.name);
      this.capital.emit(res.capitalCity);
      this.region.emit(res.region.value);
      this.income.emit(res.incomeLevel.value);
      this.latitude.emit(res.latitude);
      this.longitude.emit(res.longitude);
      console.log(res);
    });
  }
}
