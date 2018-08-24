/* global browser,expect,assert */
import { defineSupportCode } from 'cucumber';
import { notification } from '../../pageObjects/modules/notifications';
const config = require('../../../wdio.cucumber.conf').config;

defineSupportCode(({ Given, Then, When }) => {
  Then(/^I wait "(success|info|warning|danger)" notification is( not)* displayed$/, (notificationType, falseCase) => {
    const notificationState = falseCase
      ? notification.getNotificationByType(notificationType).waitForVisible(config.waitforTimeout, true)
      : notification.getNotificationByType(notificationType).waitForVisible();
    expect(true).to.equal(notificationState);
  });
});
