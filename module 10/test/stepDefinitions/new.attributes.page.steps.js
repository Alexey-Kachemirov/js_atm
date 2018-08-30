/* global browser */
const config = require('../../wdio.cucumber.conf').config;
import { expect, assert } from 'chai';
import { defineSupportCode } from 'cucumber';
import newAttribute from '../pageObjects/new.attribute.page';

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect to be on \[New Attribute] page$/, () => {
    expect(true).is.equal(newAttribute.waitPageReady());
  });
});