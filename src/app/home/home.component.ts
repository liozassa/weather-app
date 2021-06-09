import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CityWeather } from '../shared/models/city_weather.model';
import { WeatherService } from '../shared/services/weather.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cities_weather$: Observable<CityWeather[]>;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.cities_weather$ = this.weatherService.getWeatherByCityUpdateListener();
  }

  addCityWeather(e) {
    this.weatherService.getWeatherByCity(e.city_id, e.units);
  }

  removeCitiesWeather(index: number) {
    this.weatherService.removeWeather(index);
  }

}
