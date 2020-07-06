import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'

import thunk from 'redux-thunk'


import state from './store/reducers/state'

const rootReducer = combineReducers({
  state
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export default store
