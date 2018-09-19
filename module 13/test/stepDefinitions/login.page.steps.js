/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import loginPage from '../pageobjects/login.page';
const creds = require('../../creds');
const logger = require('../support/loggerConfig').logger;

defineSupportCode(({ Given, Then, When }) => {
  Given(/^I login to Portal$/, () => {
    logger.info(`I login to Portal`);
    browser.url(`http://localhost:7000/`);
    loginPage.waitPageReady();
    loginPage.userNameInput.setValue(creds.userName);
    loginPage.firstNameInput.setValue(creds.firstName);
    loginPage.lastNameInput.setValue(creds.lastName);
    loginPage.emailInput.setValue(creds.email);
    loginPage.roleSelect.selectByVisibleText(creds.role);
    loginPage.signInButton.click();
  });

});
