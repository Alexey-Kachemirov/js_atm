/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import loginPage from '../pageobjects/login.page';
import { loginSelectors } from '../pageobjects/loginSelectors';
import openWebsite from '../support/openWebsite';
const creds = require('../pageobjects/creds');

defineSupportCode(({ Given, Then, When }) => {
  Given(
    /^I open the page "([^"]*)?"$/,
    openWebsite
  );

  Given(/^I login to Portal$/, () => {
    browser.url(`http://localhost:7000/`);
    loginSelectors.waitPageReady();
    loginSelectors.userNameInput.setValue(creds.userName);
    loginSelectors.firstNameInput.setValue(creds.firstName);
    loginSelectors.lastNameInput.setValue(creds.lastName);
    loginSelectors.emailInput.setValue(creds.email);
    loginSelectors.roleSelect.selectByVisibleText(creds.role);
    loginSelectors.signInButton.click();
  });

});
