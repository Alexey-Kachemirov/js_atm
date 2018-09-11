const saml = require('../pageobjects/saml.page');
const okta = require('../pageobjects/okta.page');

module.exports = (loginType) => {
  let loginObj;
  switch (loginType) {
    case 'saml-idp': {
      loginObj = saml;
      break;
    }
    case 'okta': {
      loginObj = okta;
      break;
    }
    default: {
      loginObj = undefined;
      break;
    }
  }
  return loginObj;
};
