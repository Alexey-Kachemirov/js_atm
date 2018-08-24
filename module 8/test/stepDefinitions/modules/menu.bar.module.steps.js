/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
const menuBar = require('../../pageObjects/modules/menu.bar.module');
const config = require('../../../wdio.cucumber.conf').config;

defineSupportCode(({ Given, Then, When }) => {
  When(/^I click "(.*)" - "(.*)" submenu item in \[Menu Bar]$/, (menuItemName, submenuItemName) => {
    menuBar.menuByText(menuItemName).click();
    menuBar.subMenu.waitForVisible();
    menuBar.getSubMenuItemByText(submenuItemName).click();
    menuBar.subMenu.waitForVisible(config.waitforTimeout, true);
  });
});
