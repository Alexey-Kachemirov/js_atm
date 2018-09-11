const Mixin = Sup => class extends Sup {
  getPageTitle() {
    return browser.element('.//h1[contains(@class, "header_root")]').getText();
  }

}

module.exports = Mixin;