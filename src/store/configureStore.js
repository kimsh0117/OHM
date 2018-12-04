import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from 'reducers'
import rootSaga from 'sagas'
import logger from 'redux-logger'

export default initialState => {
  const sagaMiddleware = createSagaMiddleware();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware,logger));

  const store = createStore(rootReducer, initialState, enhancers);
  
  rootSaga.map(sagaMiddleware.run)

  return store;
};

