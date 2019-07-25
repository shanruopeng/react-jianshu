import { createStore, compose } from 'redux'
import reducer from './reducer'
const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
 //  applyMiddleware(...middleware),
  // other store enhancers if any
);
const store = createStore(reducer, enhancer);

export default store