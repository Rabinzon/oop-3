import fs from 'then-fs';
import path from 'path';
import Weather from '../src';

const readFixture = async fixtureFileName => fs.readFile(path.resolve(__dirname, '../__fixtures__', fixtureFileName), 'utf8');

let result;

describe('Weather', () => {
  beforeAll(async () => {
    result = JSON.parse(await readFixture('london.json'));
  });

  test('get weather by city name with apixu service', async () => {
    const body = JSON.parse(await readFixture('apixu.json'));

    const fetchMock = {
      get: async () => ({ data: body }),
    };

    const weather = new Weather('apixu', fetchMock);
    const data = await weather.getByCityName('London');
    expect(data).toEqual(result);
  });

  test('get weather by city name with', async () => {
    const body = JSON.parse(await readFixture('weatherbit.json'));
    const fetchMock = {
      get: async () => ({ data: body }),
    };
    const weather = new Weather('weatherbit', fetchMock);
    const data = await weather.getByCityName('London');
    expect(data).toEqual(result);
  });
});
