/* global browser,expect,assert */
/**
 * Retrieve the status of the element
 * @param  {String}   element The element
 * @param  {String}   status The status which should be called
 */

export const getElementStatus = (element, status) => {
  switch (status.toLowerCase()) {
    case 'displayed':
      return element.value ? element.isVisible() : false;
    case 'disabled':
      return !element.isEnabled();
    case 'enabled':
      return element.isEnabled();
    case 'active':
      return element.getAttribute('class').includes('active');
    case 'checked':
      return element.getAttribute('class').includes('checked');
    case 'unchecked':
      return !element.getAttribute('class').includes('checked');
    case 'selected':
      return element.getAttribute('class').includes('checked');
    default:
      throw new Error(`Unknown status name ${status}`);
  }
};
