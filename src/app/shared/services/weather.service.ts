import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getCities } from 'src/app/store/weather.selectors';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private store: Store<AppState>) { }

  getCities() {
    return this.store.pipe(
      select(getCities)
    );
  }
}
