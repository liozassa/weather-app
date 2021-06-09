import { Action } from "@ngrx/store";
import { City } from "../shared/models/city.model";

export const FETCH_CITIES = '[User] Fetch Cities';
export const SET_CITIES = '[User] Set Cities';

export class FetchCities implements Action {
    readonly type = FETCH_CITIES;
}

export class SetCities implements Action {
    readonly type = SET_CITIES;
    
    constructor(public payload: City[]) {}
}

export type WeatherActions =
FetchCities
| SetCities;