/* global browser,expect,assert */
const selectors = {
  binIcon: '[data-qa-id="delete"]',
};

class Icons {
  get selectors() { return selectors; }

  getIconSelectorByType(type) {
    switch (type.toLowerCase()) {
      case 'bin': return selectors.binIcon;
      default: throw new Error(`Incorrect notification type ${type}`);
    }
  }

}
module.exports = new Icons();

