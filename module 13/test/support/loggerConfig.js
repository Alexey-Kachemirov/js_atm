const log4js = require('log4js');

log4js.configure({
  appenders: {
    dailyLog: { type: 'dateFile', filename: 'test/logs/perMinute.log', pattern: '.yyyy-MM-dd-hh-mm' },
    console: { type: 'console' },
  },
  categories: { default: { appenders: ['dailyLog', 'console'], level: 'debug' } }
});

const logger = log4js.getLogger('combined');

module.exports = {
  logger
}