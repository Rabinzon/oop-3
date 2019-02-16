export default class {
  constructor(WeatherService, fetch, key) {
    this.provider = new WeatherService(fetch, key);
  }

  async getByCityName(cityName) {
    return this.provider.getByCityName(cityName);
  }
}
