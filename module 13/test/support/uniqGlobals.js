/* global browser,expect,assert,downloadsFolder,testDataFolder */
import uid from 'uuid/v1';

function getKey(text) {
  return text.split('{uid}')[0];
}
/**
 * Function add ability to generate and save partially uniq values for tests.
 * E.g
 * Input string TitleText_{uid} will generate uid an will be saved to globals as
 * gloabal['TitleText'] = TitleText_UID
 * @param {string} text
 * @returns {value} generated text
 */
export const generateUniqText = text => {
  const key = getKey(text);
  global[key] = text.replace('{uid}', uid().substring(0, 6));
  return global[key];
};

/**
 * Function add ability to receive partially uniq values for tests.
 * E.g
 * Input string TitleText_{uid} will generate uid an will be saved to globals as
 * gloabal['TitleText'] = TitleText_UID
 * @param {string} text
 * @returns {value} saved text
 */
export const getGeneratedUniqText = text => {
  const key = getKey(text);
  return global[key];
};
