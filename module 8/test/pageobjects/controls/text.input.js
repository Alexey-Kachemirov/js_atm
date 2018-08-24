/* global browser,expect,assert */
const selectors = {
  inputTextByLabel: (text) =>
    `.//div[label[contains(@class, 'input_label') and text()='${text}']]/div/textarea 
    | .//div[label[contains(@class, 'input_label') and text()='${text}']]/div/input`,
  inputText: 'input[class*="text-input_input"]',
  numberRangeHint: '[class*="number-range-input_hintMessage"]',
};
class TextInput {
  get selectors() { return selectors; }
  get inputText() { return browser.element(selectors.inputText); }
  get numberRangeHint() { return browser.element(selectors.numberRangeHint); }
  getInputTextByLabel(text) { return browser.element(selectors.inputTextByLabel(text)); }
}

module.exports = new TextInput();
