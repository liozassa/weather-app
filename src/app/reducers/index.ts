import { ActionReducer, ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "src/environments/environment";
import { weatherReducer } from "../store/weather.reducers";
import { WeatherState } from "../store/weather.state";

export interface AppState {
    weather: WeatherState;
}

export const reducers: ActionReducerMap<AppState> = {
    weather: weatherReducer
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
      return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [];