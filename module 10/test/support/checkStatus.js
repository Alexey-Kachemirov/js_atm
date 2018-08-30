/* global browser,expect,assert */
import { getElementStatus } from './getElementStatus';
import { config } from '../../wdio.cucumber.conf';

export const checkStatus = (element, state, falseCase) => {
  browser.waitUntil(() => {
    return getElementStatus(element, state) === (!falseCase);
  }, config.waitforTimeout, `Exp: ${state}=${!falseCase}\nAct:${getElementStatus(element, state)}`, 500);
};
