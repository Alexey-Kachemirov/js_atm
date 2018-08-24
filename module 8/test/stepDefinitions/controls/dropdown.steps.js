/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import dropdown from '../../pageObjects/controls/dropdown';
const config = require('../../../wdio.cucumber.conf').config;

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect "(.*)" value is selected in "(.*)" dropdown$/, (expected, label) => {
    dropdown.dropdownByLabel(label).waitForVisible();
    browser.waitUntil(() => {
      return dropdown.getSelectedValue(label) === expected;
    }, config.waitforTimeout, `Exp: ${expected}\nAct:${dropdown.getSelectedValue(label)}`);
  });

  When(/^I select "(.*)" value in "(.*)" dropdown$/, (value, label) => {
    dropdown.selectValueFromDropdown(label, value);
  });
});
