/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import textInput from '../../pageObjects/controls/text.input';
import plainText from '../../support/plainText';
import { generateUniqText, getGeneratedUniqText } from '../../support/uniqGlobals';


defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect "(.*)" value is shown in "(.*)" input$/, (expected, label) => {
    const expectedText = expected.includes('{uid}') ? getGeneratedUniqText(expected) : expected;
    textInput.getInputTextByLabel(label).waitForVisible();
    const actualText = textInput.getInputTextByLabel(label).getAttribute('value')
      ? textInput.getInputTextByLabel(label).getValue()
      : textInput.getInputTextByLabel(label).getText();
    expect(expectedText).is.equal(plainText(actualText));
  });

  When(/^I enter \"([^\"]*)\" value to "(.*)" input$/, (text, label) => {
    const value = text.includes('{uid}') ? generateUniqText(text) : text;
    textInput.getInputTextByLabel(label).waitForVisible();
    textInput.getInputTextByLabel(label).setValue(value);
  });
});
