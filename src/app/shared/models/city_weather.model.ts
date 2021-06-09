export class CityWeather {
  constructor(
    public city_id: number,
    public city_name: string,
    public weather_id: number,
    public weather_main: string,
    public weather_description: string,
    public weather_icon: string,
    public weather_units: string,
    public weather_temp: number
  ) {}
}
