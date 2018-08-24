/* global browser,expect,assert */
const Page = require('./page');

const selectors = {
  some: '[class$=""]',
  filtersHeader: '[class$="filters-header_root"]',
  paginationBlock: '[class*="header-view-options_root"] [class*="pagination_root"]',
  paginationButtonByText: (text) => `//div[contains(@class, 'pagination_root')]//button[text()='${text}']`,
};

class SearchPage extends Page {
  get selectors() { return selectors; }
  get filtersHeader() { return browser.element(selectors.filtersHeader); }
  get paginationBlock() { return browser.element(selectors.paginationBlock); }
  paginationButtonByText(text) { return browser.element(selectors.paginationButtonByText(text)); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.filtersHeader, this.paginationBlock],
      notExpectedItems: [super.loadingResultWithText],
    };
    super.waitPageReady(checkObjects);
    return true;
  }

}
module.exports = new SearchPage();
