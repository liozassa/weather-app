import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, map } from 'rxjs/operators';
import * as WeatherActions from './weather.actions';
import { City } from "../shared/models/city.model";
import { JsonService } from "../shared/services/json.service";

@Injectable()
export class WeatherEffects {

  @Effect()
  fetchCities = this.actions$.pipe(
    ofType(WeatherActions.FETCH_CITIES),
    switchMap(() => {
      return this.json.getData('./assets/city-list.json');
    }),
    map((resData: City[]) => {
      return new WeatherActions.SetCities(resData);
    })
  );

  constructor(private actions$: Actions,
              private json: JsonService) {}

}