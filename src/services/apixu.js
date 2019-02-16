import url from 'url';

export default class {
  constructor(fetch, key) {
    this.fetch = fetch;
    this.apiUrlString = `https://api.apixu.com/v1/current.json?key=${key}`
  }
  
  prepare(object) {
    const { location: { name, region }, current} = object;

    return {
      city: name,
      temp: current.temp_c,
      text: current.condition.text,
      wind: current.wind_mph
    }
  }

  async getByCityName(cityName) {
    const requestUrl = url.parse(`${this.apiUrlString}&q=${cityName}`);

    const { data } = await this.fetch.get(requestUrl);
    return this.prepare(data);
  }
}
