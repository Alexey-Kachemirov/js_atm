/* global browser,expect,assert */
const Page = require('../page');

const selectors = {
  taskBar: '[class*="header_root"]',
  logoImage: '[class*="header_logo"]',
  menuByText: (text) => `//div[div[text()="${text}" and  contains(@class, "dropdown-menu_header")]]`,
  cartIcon: '[class*="header-menu_cartButton"]',
  cartCounter: '[class*="badge-counter_root"]',
  searchDropdown: '[class*="search-input_dropdown"]',
  searchDropdownOptions: '[class*="option_root"]>span',
  searchDropdownPopup: '[class*="search-input_dropdownPopover"]',
  searchInput: '[class*="search-input_input"]',
  menuItemsHeader: '//div[contains(@class, "dropdown-menu_header")]',
  subMenu: '[class*="dropdown-menu_popoverContent"]',
  subMenuColumns: '[class*="column_root"]',
  subMenuItems: '[class*="item_root"]',
};

class MenuBarModule extends Page {
  get selectors() { return selectors; }
  get logoImage() { return browser.element(selectors.logoImage); }
  get searchDropdown() { return browser.element(selectors.searchDropdown); }
  get searchInput() { return browser.element(selectors.searchInput); }
  get menuItemsHeader() { return browser.elements(selectors.menuItemsHeader); }
  get subMenu() { return browser.element(selectors.subMenu); }
  get subMenuItems() { return browser.elements(selectors.subMenuItems); }
  menuByText(text) { return browser.element(selectors.menuByText(text)); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.logoImage, this.menuItemsHeader, this.cartIcon, this.searchDropdown, this.searchInput],
      notExpectedItems: [super.loadingResultWithText],
    };
    super.waitPageReady(checkObjects);
    return this;
  }

  getSubMenuItemByText(text) {
    this.subMenuItems.waitForVisible();
    return this.subMenuItems.value
      .find(item => {
        return item.getText() === text;
      });
  }

  getSearchDropDownItemByText(text) {
    this.searchDropdownOptions.waitForVisible();
    return this.searchDropdownOptions.value
      .find(item => {
        return item.getText() === text;
      });
  }
}
module.exports = new MenuBarModule();
