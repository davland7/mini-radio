import fetch from 'node-fetch';
import chalk from 'chalk';
import stations from '../src/stations.json' assert {type: "json"};

const error = chalk.red;
const passed = chalk.green;

stations.forEach((station, index) => {
  setTimeout(() => {
    fetch(station.src)
      .then(() => {
        fetch(station.src)
          .then((res) => {
            const messsage = `${station.title} - ${station.description}: status ${res.statusText} ${res.status}`;
            console.log(res.ok ? passed(messsage) : error(messsage));
          });
      });
  }, index * 1000);
});
