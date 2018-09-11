/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import homePage from '../pageobjects/home.page';

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I expect to be on \[Home] page$/, () => {
    expect(homePage.waitPageReady()).is.equal(true);
  });
});
