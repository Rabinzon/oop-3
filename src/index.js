import 'source-map-support/register';
import axios from 'axios';
import Weather from './Weather';
import * as services from './services';
import apiKeys from '../keys';

export default class {
  constructor(serviceName, fetch = axios) {
    this.weather = new Weather(services[serviceName], fetch, apiKeys[serviceName]);
  }

  async getByCityName(cityName) {
    return this.weather.getByCityName(cityName);
  }
}
