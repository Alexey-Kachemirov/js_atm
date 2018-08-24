/* global browser,expect,assert */
const Page = require('./page');

const selectors = {
  logoImage: '[class$="header_logo"]',
};

class LoginPage extends Page {
  get selectors() { return selectors; }
  get logoImage() { return browser.element(selectors.logoImage); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.signInProfilesBlock, this.logoImage],
      notExpectedItems: [super.loadingResultWithText],
    };
    super.waitPageReady(checkObjects);
    return true;
  }
}
module.exports = new LoginPage();
