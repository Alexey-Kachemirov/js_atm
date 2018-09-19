/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import homePage from '../pageobjects/home.page';
const logger = require('../support/loggerConfig').logger;

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect to be on \[Home] page$/, () => {
    logger.info(`I expect to be on [Home] page`);
    expect(homePage.waitPageReady()).is.equal(true);
  });
});
