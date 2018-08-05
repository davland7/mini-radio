const fetch = require('node-fetch');
const chalk = require('chalk');
const stations = require('../src/stations.json');

const error = chalk.red;
const passed = chalk.green;

stations.forEach((station, index) => {
  setTimeout(() => {
    fetch(station.src)
      .then((res) => {
        fetch(station.src)
          .then((res) => {
            const messsage = `${station.title} - ${station.description}: status ${res.statusText} ${res.status}`;
            console.log(res.ok ? passed(messsage) : error(messsage));
          });
      });
  }, index * 1000);
});
