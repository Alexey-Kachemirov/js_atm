/* global browser,expect,assert */
/**
 * Return normalized text
 * @param  {String}   text Input text
  */

module.exports = (text) => {
  return text.replace(/(\r\n|\n|\r)/gm, ' ').trim()
    .replace(/(\uE5CD|\uE876|\uE88E|\uE90A)/g, '')
    .trim();
};
