/* global browser,expect,assert */
const Page = require('./page');
const buttonByText = require('../pageObjects/buttonByText').default;

const selectors = {
  headerText: './/h1[contains(@class, "header_root") and text() ="New Attribute"]',
  exampleNumber: '[class*="attribute-type-number_decimalPlacesExample"]',
  addListPanel: '[class*="new-list-item-modal_root"]',
};
class NewAttribute extends Page {
  get selectors() { return selectors; }
  get headerText() { return browser.element(selectors.headerText); }
  get exampleNumber() { return browser.element(selectors.exampleNumber); }
  get addListPanel() { return browser.element(selectors.addListPanel); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.headerText, buttonByText('Create'), buttonByText('Cancel')],
      notExpectedItems: [super.loadingResultWithText],
    };
    super.waitPageReady(checkObjects);
    return true;
  }
}
module.exports = new NewAttribute();
