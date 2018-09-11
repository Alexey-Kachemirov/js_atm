/* global browser,expect,assert */
const selectors = {
  dropdownByLabel: (text) => `//div[label[contains(@class, 'dropdown_label') and text()='${text}']] | //div[label[contains(@class, 'ddWrapperLabel') and text()='${text}']]`,
  selectRoot: '[class*="root"]',
  selectedOption: '[class*="dropdown_valueOption"] span',
  options: '[class*="dropdown_popover"] [class*="option_root"]',
  dropdown: '[class*="dropdown_root"]',
  optionByText: (text) => `//div[contains(@class, 'option_root') and ./span[text()='${text}']]`,
};

class DropDown {
  get selectedOption() { return browser.element(selectors.selectedOption); }
  get options() { return browser.elements(selectors.options); }
  dropdownByLabel(text) { return browser.element(selectors.dropdownByLabel(text)); }
  optionByText(text) { return browser.element(selectors.optionByText(text)); }

  getSelectedValue(label) {
    return this.dropdownByLabel(label).getText(selectors.selectedOption);
  }

  selectValueFromDropdown(label, value) {
    this.dropdownByLabel(label).waitForVisible();
    this.dropdownByLabel(label).click(selectors.selectRoot);
    this.optionByText(value).waitForVisible();
    this.optionByText(value).click();
  }
}
module.exports = new DropDown();
