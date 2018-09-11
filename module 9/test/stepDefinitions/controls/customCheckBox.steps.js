/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import { customCheckBox } from '../../pageObjects/controls/customCheckBox';
import { checkStatus } from '../../support/checkStatus';

defineSupportCode(({ Given, Then, When }) => {
  When(/^I (check|uncheck) \"([^\"]*)\" checkbox$/, (action, label) => {
    customCheckBox.toggleCheckboxByLabel(action, label);
  });

  Then(/^I expect "(.*)" checkbox to be (un)*checked$/, (label, falseCase) => {
    const checkbox = customCheckBox.getCheckBoxByLabel(label);
    checkStatus(checkbox, 'checked', falseCase);
  });
});
