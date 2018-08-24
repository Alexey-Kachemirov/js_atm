/* global browser,expect,assert */
const config = require('../../wdio.cucumber.conf').config;
import plainText from './plainText';

export const waitForTextEqual = (element, expectedText, falseCase) => {
  browser.waitUntil(() => {
    const text = element.getText();
    const normalizedText = Array.isArray(text) ? plainText(text.join()) : plainText(text);
    return (normalizedText === expectedText) === !falseCase;
  }, config.waitforTimeout, `Exp: ${expectedText}\nAct: ${element.getText()} FalseCase: ${falseCase}`);
};
