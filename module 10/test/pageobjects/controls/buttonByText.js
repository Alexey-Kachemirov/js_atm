/* global browser,expect,assert */
/**
 * Return element by button class and text
 * @param  {String}   text displayed for button class
  */
export const getSelector = text => {
  return `.//*[contains(@class, 'button_root') and text()='${text}'] | .//*[contains(@class, 'Button') and text()='${text}'] `;
};

export default text => {
  return browser.element(getSelector(text));
};
