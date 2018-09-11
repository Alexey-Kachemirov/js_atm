/* global browser,expect,assert */
const selectors = {
  successNotification: '[class*="success"]',
};

class Notification {
  get selectors() { return selectors; }
  get getSuccessNotification() { return browser.element(selectors.successNotification); }

  getNotificationByType(type) {
    switch (type.toLowerCase()) {
      case 'success':
        return this.getSuccessNotification;
      default:
        throw new Error(`Incorrect notification type ${type}`);
    }
  }
}
export const notification = new Notification();
