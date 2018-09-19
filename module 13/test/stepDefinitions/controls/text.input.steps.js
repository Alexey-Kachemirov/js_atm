/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import textInput from '../../pageObjects/controls/text.input';
import plainText from '../../support/plainText';
import { generateUniqText, getGeneratedUniqText } from '../../support/uniqGlobals';
const logger = require('../../support/loggerConfig').logger;

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect "(.*)" value is shown in "(.*)" input$/, (expected, label) => {
    logger.debug(`I expect ${label} input to be filled correctly`);
    const expectedText = expected.includes('{uid}') ? getGeneratedUniqText(expected) : expected;
    textInput.getInputTextByLabel(label).waitForVisible();
    const actualText = textInput.getInputTextByLabel(label).getAttribute('value')
      ? textInput.getInputTextByLabel(label).getValue()
      : textInput.getInputTextByLabel(label).getText();
    expect(expectedText).is.equal(plainText(actualText));
  });

  When(/^I enter \"([^\"]*)\" value to "(.*)" input$/, (text, label) => {
    logger.debug(`I fill ${label} input`);
    browser.pause(1000);
    const value = text.includes('{uid}') ? generateUniqText(text) : text;
    textInput.getInputTextByLabel(label).waitForVisible();
    textInput.getInputTextByLabel(label).setValue(value);
  });
});
