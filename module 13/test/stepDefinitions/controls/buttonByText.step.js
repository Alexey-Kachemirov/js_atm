/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import buttonByText from '../../pageObjects/controls/buttonByText';
import { checkStatus } from '../../support/checkStatus';
const logger = require('../../support/loggerConfig').logger;
const highlightElement = require('../../support/highlightElement').highlightElement;

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect "(.*)" button is( not)* (displayed|enabled|disabled)$/, (buttonText, falseCase, state) => {
    logger.error(`I expect ${buttonText} to have correct status`);
    browser.pause(200);
    const button = buttonByText(buttonText);
    checkStatus(button, state, falseCase);
  });

  When(/^I click "(.*)" button$/, (buttonText) => {
    logger.warn(`I click ${buttonText} button`);
    buttonByText(buttonText).waitForVisible();
    buttonByText(buttonText).waitForEnabled();
    buttonByText(buttonText).click();
  });

  When(/^I highlight "([^"]*)"$/, (alias) => {
    logger.debug(`I highlight ${alias}`);
    return highlightElement(alias);
    browser.pause(5000);
  });
});
