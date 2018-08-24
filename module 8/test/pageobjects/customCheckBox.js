/* global browser,expect,assert */
const selectors = {
  checkBoxByLabel: (label) => `//span[contains(@class, "checkbox_root")][label/span[contains(@class, "checkbox_label") and text()="${label}"]]`,
};
class CustomCheckBox {
  getCheckBoxByLabel(label) { return browser.element(selectors.checkBoxByLabel(label)); }

  isCheckedByLabel(label) {
    this.getCheckBoxByLabel(label).waitForVisible();
    return this.getCheckBoxByLabel(label)
      .getAttribute('class')
      .includes('checked');
  }

  checkByLabel(label) {
    const checkboxIsChecked = this.isCheckedByLabel(label);
    if (!checkboxIsChecked) {
      this.getCheckBoxByLabel(label).click();
    }
  }

  toggleCheckboxByLabel(action, label) {
    if (action === 'uncheck') {
      this.uncheckByLabel(label);
    } else {
      this.checkByLabel(label);
    }
  }
}
export const customCheckBox = new CustomCheckBox();
