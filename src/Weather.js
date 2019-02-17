export default class {
  constructor(WeatherService) {
    this.provider = WeatherService;
  }

  async getByCityName(cityName) {
    return this.provider.getByCityName(cityName);
  }
}
