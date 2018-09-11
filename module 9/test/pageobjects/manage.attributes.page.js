/* global browser,expect,assert */
const Page = require('./page');

const selectors = {
  headerText: './/h1[contains(@class, "header_root") and text() ="Manage Attributes"]',
  attributesList: '[class*="list_table"]',
  attributeRowByName: (text) => `.//tbody/tr[td[contains(@class, "table_tableBody__cell") and text()= "${text}"]]`,
};

class ManageAttributes extends Page {
  get selectors() { return selectors; }
  get headerText() { return browser.element(selectors.headerText); }
  get attributesList() { return browser.element(selectors.headerText); }
  attributeRowByName(text) { return browser.element(selectors.attributeRowByName(text)); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.headerText, this.attributesList],
      notExpectedItems: [super.loadingResultWithText],
    };
    super.waitPageReady(checkObjects);
    return true;
  }
}
module.exports = new ManageAttributes();