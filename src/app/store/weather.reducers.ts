import { City } from "../shared/models/city.model";
import { initialWeatherState } from "./weather.state";
import * as WeatherActions from './weather.actions';

export interface WeatherState {
    cities: City[];
}

export function weatherReducer(
    state = initialWeatherState,
    action: WeatherActions.WeatherActions) {
    switch (action.type) {
      case WeatherActions.SET_CITIES:
        return {
          ...state,
          cities: action.payload
        };
  
        default:
          return state;
    }
};
  