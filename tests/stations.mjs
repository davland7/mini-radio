import fetch from 'node-fetch';
import chalk from 'chalk';
import { createRequire } from "module";

const require = createRequire(import.meta.url);
const data = require('../src/stations.json');
const error = chalk.red;
const passed = chalk.green;

data.forEach((item, index) => {
  setTimeout(() => {
    fetch(item.src)
      .then((res) => {
        const messsage = `${item.title} - ${item.description}: status ${res.statusText} ${res.status}`;
        console.log(res.ok ? passed(messsage) : error(messsage));
      });
  }, index * 1000);
});
