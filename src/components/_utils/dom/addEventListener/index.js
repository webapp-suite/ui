/**
 * @source: https://github.com/react-component/util/blob/master/src/Dom/addEventListener.js
 * @author: react-component
 * @license: MIT
 */

import addDOMEventListener from './addDOMEventListener'
import ReactDOM from 'react-dom'

export default function addEventListenerWrap (target, eventType, cb, option) {
  /* eslint camelcase: 2 */
  const callback = ReactDOM.unstable_batchedUpdates ? function run (e) {
    ReactDOM.unstable_batchedUpdates(cb, e)
  } : cb
  return addDOMEventListener(target, eventType, callback, option)
}
