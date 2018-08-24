/* global browser,expect,assert */
class Page {
  constructor() {
    this.title = 'My Page';
  }

  get loadingResultWithText() { return browser.elements('.//*[text()="Loading..."]').value; }

  open(path) {
    browser.url(`/${path}`);
  }

  getElementsArray(elements) {
    let elementsArray = [];
    elements.forEach((e) => {
      if (Array.isArray(e)) {
        elementsArray = elementsArray.concat(e);
      } else {
        elementsArray.push(e);
      }
    });
    return elementsArray;
  }

  waitPageReady(checkObjects) {
    function checkElementVisible(element) {
      element.waitForVisible();
    }

    function checkElementNotExist(element) {
      element.waitForExist(true, true);
    }

    if (checkObjects.expectedItems) {
      const expectedElements = this.getElementsArray(checkObjects.expectedItems);
      expectedElements.forEach(checkElementVisible);
    }

    if (checkObjects.notExpectedItems) {
      const notExpectedElements = this.getElementsArray(checkObjects.notExpectedItems);
      notExpectedElements.forEach(checkElementNotExist);
    }
  }
}
module.exports = Page;
