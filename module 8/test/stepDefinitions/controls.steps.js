/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
const menuBar = require('../pageObjects/menu.bar.module');
import buttonByText from '../pageObjects/buttonByText';
import { customCheckBox } from '../pageObjects/customCheckBox';
import dropdown from '../pageObjects/dropdown';
import { notification } from '../pageObjects/notifications';
import textInput from '../pageObjects/text.input';
import plainText from '../support/plainText';
import { checkStatus } from '../support/checkStatus';
import { generateUniqText, getGeneratedUniqText } from '../support/uniqGlobals';
const config = require('../../wdio.cucumber.conf').config;


defineSupportCode(({ Given, Then, When }) => {
  When(/^I click "(.*)" - "(.*)" submenu item in \[Menu Bar]$/, (menuItemName, submenuItemName) => {
    menuBar.menuByText(menuItemName).click();
    menuBar.subMenu.waitForVisible();
    menuBar.getSubMenuItemByText(submenuItemName).click();
    menuBar.subMenu.waitForVisible(config.waitforTimeout, true);
  });

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

  When(/^I (check|uncheck) "(.*)" checkbox$/, (action, label) => {
    customCheckBox.toggleCheckboxByLabel(action, label);
  });

  Then(/^I expect "(.*)" checkbox to be (un)*checked$/, (label, falseCase) => {
    const checkbox = customCheckBox.getCheckBoxByLabel(label);
    checkStatus(checkbox, 'checked', falseCase);
  });

  Then(/^I expect "(.*)" value is selected in "(.*)" dropdown$/, (expected, label) => {
    dropdown.dropdownByLabel(label).waitForVisible();
    browser.waitUntil(() => {
      return dropdown.getSelectedValue(label) === expected;
    }, config.waitforTimeout, `Exp: ${expected}\nAct:${dropdown.getSelectedValue(label)}`);
  });

  When(/^I select "(.*)" value in "(.*)" dropdown$/, (value, label) => {
    dropdown.selectValueFromDropdown(label, value);
  });

  Then(/^I expect "(.*)" value is shown in "(.*)" input$/, (expected, label) => {
    const expectedText = expected.includes('{uid}') ? getGeneratedUniqText(expected) : expected;
    textInput.getInputTextByLabel(label).waitForVisible();
    const actualText = textInput.getInputTextByLabel(label).getAttribute('value')
      ? textInput.getInputTextByLabel(label).getValue()
      : textInput.getInputTextByLabel(label).getText();
    expect(expectedText).is.equal(plainText(actualText));
  });

  When(/^I enter "(.*)" value to "(.*)" input$/, (text, label) => {
    const value = text.includes('{uid}') ? generateUniqText(text) : text;
    textInput.getInputTextByLabel(label).waitForVisible();
    textInput.getInputTextByLabel(label).setValue(value);
  });

  Then(/^I wait "(success|info|warning|danger)" notification is( not)* displayed$/, (notificationType, falseCase) => {
    const notificationState = falseCase
      ? notification.getNotificationByType(notificationType).waitForVisible(config.waitforTimeout, true)
      : notification.getNotificationByType(notificationType).waitForVisible();
    expect(true).to.equal(notificationState);
  });
});
