/* global browser,expect,assert */
const Page = require('./page');

const selectors = {
  pageTitle: '[class*="home_welcomeBlock"]',
  homeRoot: '[class*="home_root"]',
  brandContainer: '[class*="home_gridSectionWrapper"]',
  brandListItem: 'img[class*="home_gridImage"]',
  brandByText: (text) => `img[class*="home_gridImage"][alt="${text}"]`,
};

class HomePage extends Page {
  get selectors() { return selectors; }
  get pageTitle() { return browser.element(selectors.pageTitle); }
  get homeRoot() { return browser.element(selectors.homeRoot); }
  get brandContainer() { return browser.element(selectors.brandContainer); }
  get allBrandListItems() { return browser.elements(selectors.brandListItem); }

  brandByText(text) { return browser.element(selectors.brandByText(text)); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.pageTitle, this.homeRoot, this.brandContainer, this.allBrandListItems],
      notExpectedItems: [super.loadingResultWithText],
    };
    super.waitPageReady(checkObjects);
    return true;
  }
}
module.exports = new HomePage();
