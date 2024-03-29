import { createStore, applyMiddleware } from 'redux'
import axios from 'axios'
import appReducer from './redux'
import thunkMiddleware from 'redux-thunk' // https://github.com/gaearon/redux-thunk

let middleware = [
  thunkMiddleware.withExtraArgument({ axios }),
]
if (process.browser) {
  middleware = [...middleware, createLogger({ collapsed: true })]
}

/** We wrap the entire redux store in a root reducer with a special
 * action, RESET_STORE. It calls our application's reducer with
 * state = undefined. This will trigger each of our sub-reducers
 * to reset back to their initial state. This will come in
 * handy when we need to reset our redux store in between tests.
 */
const RESET_STORE = 'RESET_STORE'
export const resetStore = () => ({ type: RESET_STORE })

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined
    return appReducer(state, action)
  }
  return appReducer(state, action)
}

export default createStore(
  rootReducer,
  applyMiddleware(...middleware)
)
