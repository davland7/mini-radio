const fetch = require('node-fetch');
const chalk = require('chalk');
const error = chalk.red;
const passed = chalk.green;

stations.forEach((station, index) => {
  setTimeout(() => {
    fetch(station.stream)
      .then((res) => {
        fetch(station.stream)
          .then((res) => {
            const messsage = `${station.title}: status ${res.statusText} ${res.status}`;
            console.log(res.ok ? passed(messsage) : error(messsage));
          });
      });
  }, index * 2000);
});
