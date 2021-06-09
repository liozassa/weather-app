import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { City } from '../shared/models/city.model';
import { AppState } from '../reducers';
import * as WeatherActions from './weather.actions';

@Injectable({
  providedIn: 'root'
})
export class WeatherResolver implements Resolve<City[]> {

  constructor(private store: Store<AppState>,
              private actions$: Actions) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select('weather').pipe(
      take(1),
      map(weatherState => {
        return weatherState.cities;
      }),
      switchMap(cities => {
        if (cities.length === 0) {
          this.store.dispatch(new WeatherActions.FetchCities());
          return this.actions$.pipe(
            ofType(WeatherActions.SET_CITIES),
            take(1)
          );
        } else {
          return of(cities);
        }
      })
    );
  }
}
