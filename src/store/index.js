import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import todoApp from './reducer'
// import loggerMiddleware from '../middlewares/logger'
import loggerEnhancer from '../enhancers/logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// createStore(reducer, [preloadedState], [enhancer])
const store = createStore(
  todoApp,
  composeEnhancers(
    applyMiddleware(
      thunkMiddleware,
      // loggerMiddleware
    ),
    loggerEnhancer
  )
)

export default store
