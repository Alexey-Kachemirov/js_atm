/* global browser,expect,assert */
const Page = require('./page');

const selectors = {
  userNameInput: '#userName',
  firstNameInput: '#firstName',
  lastNameInput: '#lastName',
  emailInput: '#email',
  roleSelect: '#role',
  signInButton: '.btn-primary',
};

class LoginPage extends Page {
  get selectors() { return selectors; }
  get userNameInput() { return browser.element(selectors.userNameInput); }
  get firstNameInput() { return browser.element(selectors.firstNameInput); }
  get lastNameInput() { return browser.element(selectors.lastNameInput); }
  get emailInput() { return browser.element(selectors.emailInput); }
  get roleSelect() { return browser.element(selectors.roleSelect); }
  get signInButton() { return browser.element(selectors.signInButton); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [
        this.userNameInput,
        this.firstNameInput,
        this.lastNameInput,
        this.emailInput,
        this.roleSelect,
        this.signInButton],
    };
    super.waitPageReady(checkObjects);
    return true;
  }

}
module.exports = new LoginPage();