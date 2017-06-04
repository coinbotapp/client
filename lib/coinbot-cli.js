const cli = require('commander');

function client(argv) {
  cli
    .version('0.0.1')
    .parse(argv);
}

module.exports = client;
