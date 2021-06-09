import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CityWeather } from 'src/app/shared/models/city_weather.model';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() city_weather: CityWeather;

  @Output() remove: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeRecord() {
    this.remove.emit();
  }

}
