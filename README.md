## weather

[![Build Status](https://travis-ci.org/Rabinzon/oop-3.svg?branch=master)](https://travis-ci.org/Rabinzon/oop-3)

## CL usage
```sh
$ weather --service <service> <city>
$ weather --service apixu kazan

{
    city: 'Kazan',
    temp: -1,
    text: 'Partly cloudy',
    wind: 16.1
}
```

Available sevices: `apixu`, `weatherbit`

## Library usage

```js
import Weather from 'Weather';

const weather = new Weather('apixu');
await weather.getByCityName('London');
```


## Setup

### `keys.json` should include api keys
```json
{
  "apixu": "key",
  "weatherbit": "key"
}
```

```sh
$ make install
$ make build
$ npm ln
```

## Run tests

```sh
$ make test
```

