/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
const { config } = require('../../wdio.cucumber.conf');
const loginFactory = require('../helpers/loginFactory');

defineSupportCode(({ Given, Then, When }) => {
  When(/^I login to Portal via "(.*)"$/, (loginMethod) => {
    browser.url(config.baseUrl);
    browser.pause(2000);
    const login = loginFactory(loginMethod);
    login.loginToPortal();
  });

});
