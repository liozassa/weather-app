import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { getCities } from 'src/app/store/weather.selectors';
import { environment } from 'src/environments/environment';
import { CityWeather } from '../models/city_weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private cities_weather: CityWeather[] = [];
  private cities_weatherUpdated = new Subject<CityWeather[]>();

  constructor(private store: Store<AppState>,
              private http: HttpClient) { }

  getCities() {
    return this.store.pipe(
      select(getCities)
    );
  }

  getWeatherByCity(city_id: number, units: string = 'standard') {
    let queryParams = `?appid=${environment.WEATHER_APP_ID}&id=${city_id}&units=${units}`;
    this.http.get(`${environment.WEATHER_API}weather${queryParams}`)
    .subscribe((result: any) => {
      // console.log('result', result); // For test.
      this.cities_weather.push(new CityWeather(
        result.id,
        result.name,
        result.weather[0].id,
        result.weather[0].main,
        result.weather[0].description,
        result.weather[0].icon,
        result.base,
        result.main.temp
      ));
      this.cities_weatherUpdated.next([...this.cities_weather]);
    });
  }

  getWeatherByCityUpdateListener() {
    return this.cities_weatherUpdated.asObservable();
  }

  removeWeather(index: number) {
    this.cities_weather.splice(index, 1);
    this.cities_weatherUpdated.next([...this.cities_weather]);
  }
}
