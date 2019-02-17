import url from 'url';

export default class {
  constructor(key, fetch) {
    this.fetch = fetch;
    this.apiUrlString = `https://api.weatherbit.io/v2.0/current?key=${key}`
  }

  prepare({ data }) {
    const { weather, city_name, temp, wind_spd } = data[0];
    
    return {
      temp,
      city: city_name,
      text: weather.description,
      wind: wind_spd
    }
  }
  
  async getByCityName(cityName) {
    const requestUrl = url.parse(`${this.apiUrlString}&city=${cityName}`);
    
    const { data } = await this.fetch.get(requestUrl);

    return this.prepare(data);
  }
}
