#!/usr/bin/env node
import program from 'commander';
import Weather from '..';

program
  .version('0.1.0', '-v, --version')
  .option('-s, --service <n>', 'Weather service. apixu or weatherbit')
  .arguments('<city>')
  .action(async (city, cmd) => {
    const weather = new Weather(cmd.service);
    console.log(await weather.getByCityName(city));
  })
  .parse(process.argv);
