import {createStore, applyMiddleware, compose} from 'redux'
import createLogger from 'redux-logger'

import rootReducer from './reducers';

const middlewares = [];

if (process.env.NODE_ENV !== `production`) {
  const logger = createLogger();
  middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default store;