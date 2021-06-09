import { createSelector } from "@ngrx/store";
import { AppState } from "src/app/reducers";
import { WeatherState } from "./weather.state";

export const selectWeatherState = (state: AppState) => {
    return state.weather;
  };
  
  
  export const getCities = createSelector(
    selectWeatherState,
    (state: WeatherState) => state.cities
  );