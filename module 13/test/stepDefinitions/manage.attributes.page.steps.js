/* global browser */
const config = require('../../wdio.cucumber.conf').config;
import { expect, assert } from 'chai';
import { defineSupportCode } from 'cucumber';
import manageAttributes from '../pageObjects/manage.attributes.page';
import { getGeneratedUniqText } from '../support/uniqGlobals';
const logger = require('../support/loggerConfig').logger;

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect to be on \[Manage Attributes] page$/, () => {
    logger.info(`I expect to be on [Manage Attributes] page`);
    expect(true).is.equal(manageAttributes.waitPageReady());
  });
});
