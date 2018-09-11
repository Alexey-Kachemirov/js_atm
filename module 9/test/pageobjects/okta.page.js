/* global browser,expect,assert */
const Page = require('./page');
const creds = require('../../creds');

const selectors = {
  oktaUserNameInput: 'input#okta-signin-username',
  oktaPassInput: 'input#okta-signin-password',
  oktaSignInBtn: '#okta-signin-submit',
  oktaSignInForm: '.auth-content-inner',
  oktaErrorMessage: '.okta-form-infobox-error>p',
  oktaAnswerField: '.o-form-input-name-answer>input[name="answer"]',
  oktaVerifyBtn: '.o-form-button-bar>input[class*="button"][value="Verify"]',
  oktaSecurityQuestionForm: 'form.mfa-verify-question',
};

class Okta extends Page {
  get selectors() { return selectors; }
  get oktaSignInForm() { return browser.element(selectors.oktaSignInForm); }
  get oktaUserNameInput() { return browser.element(selectors.oktaUserNameInput); }
  get oktaPassInput() { return browser.element(selectors.oktaPassInput); }
  get oktaSignInBtn() { return browser.element(selectors.oktaSignInBtn); }
  get oktaErrorMessage() { return browser.element(selectors.oktaErrorMessage); }
  get oktaAnswerField() { return browser.element(selectors.oktaAnswerField); }
  get oktaVerifyBtn() { return browser.element(selectors.oktaVerifyBtn); }
  get oktaSecurityQuestionForm() { return browser.element(selectors.oktaSecurityQuestionForm); }

  waitPageReady() {
    const checkObjects = {
      expectedItems: [this.oktaSignInForm, this.oktaUserNameInput, this.oktaPassInput, this.oktaSignInBtn],
      notExpectedItems: [super.loadingResultWithText],
    };
    super.waitPageReady(checkObjects);
    return true;
  }

  loginToPortal() {
    this.findUrlByText('Elateral SSO').click();
    this.waitPageReady();
    this.oktaSignInForm.waitForVisible();
    this.oktaUserNameInput.setValue(creds.userName);
    this.oktaPassInput.setValue(creds.password);
    this.oktaSignInBtn.click();
    this.oktaAnswerField.waitForVisible();
    this.oktaAnswerField.setValue(creds.secureAnswer);
    this.oktaVerifyBtn.click();
  }
}

module.exports = new Okta();
