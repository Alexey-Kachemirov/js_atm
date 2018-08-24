/* global browser */
const config = require('../../wdio.cucumber.conf').config;
import { expect, assert } from 'chai';
import { defineSupportCode } from 'cucumber';
import manageAttributes from '../pageObjects/manage.attributes.page';
import { getGeneratedUniqText } from '../support/uniqGlobals';
import icons from '../pageObjects/controls/icons';

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect to be on \[Manage Attributes] page$/, () => {
    expect(true).is.equal(manageAttributes.waitPageReady());
  });

  Then(/^I expect "(.*)" attribute is( not)* shown on \[Manage Attributes] page$/, (attributeName, falseCase) => {
    const expectedAttributeName = attributeName.includes('{uid}') ? getGeneratedUniqText(attributeName) : attributeName;
    const displayStatusIsCorrect = falseCase
      ? browser.waitForVisible(manageAttributes.selectors.attributeRowByName(expectedAttributeName), config.waitforTimeout, true)
      : manageAttributes.attributeRowByName(expectedAttributeName).waitForVisible();
    expect(displayStatusIsCorrect).to.equal(true, `Attribute with ${attributeName} name display status is incorrect`);
  });

  When(/^I click "(bin|cogs|copy)" icon for "(.*)" attribute on \[Manage Attributes] page$/, (icon, attributeName) => {
    const expectedAttributeName = attributeName.includes('{uid}') ? getGeneratedUniqText(attributeName) : attributeName;
    const attribute = manageAttributes.attributeRowByName(expectedAttributeName)
      .element(icons.getIconSelectorByType(icon));
    attribute.waitForVisible();
    attribute.click();
  });
});
