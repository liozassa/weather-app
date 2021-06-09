import { City } from "../shared/models/city.model";

export interface WeatherState {
    cities: City[];
}

export const initialWeatherState: WeatherState = {
    cities: []
}