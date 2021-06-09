import { Component, Input, OnInit } from '@angular/core';
import { CityWeather } from 'src/app/shared/models/city_weather.model';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss']
})
export class WeatherCardComponent implements OnInit {

  @Input() city_weather: CityWeather;

  constructor() { }

  ngOnInit(): void {
    console.log('city_weather', this.city_weather);
  }

}
