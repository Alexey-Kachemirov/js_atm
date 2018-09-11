/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import buttonByText from '../../pageObjects/controls/buttonByText';
import { checkStatus } from '../../support/checkStatus';

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect "(.*)" button is( not)* (displayed|enabled|disabled)$/, (buttonText, falseCase, state) => {
    browser.pause(200);
    const button = buttonByText(buttonText);
    checkStatus(button, state, falseCase);
  });

  When(/^I click "(.*)" button$/, (buttonText) => {
    buttonByText(buttonText).waitForVisible();
    buttonByText(buttonText).waitForEnabled();
    buttonByText(buttonText).click();
  });
});
