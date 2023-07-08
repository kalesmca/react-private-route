import {applyMiddleware, compose, createStore} from 'redux';
import { routerMiddleware } from 'connected-react-router'

import rootReducer from './reducers/index';
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
    const store = createStore(
        rootReducer(history), // root reducer with router state
      preloadedState,
      compose(
        applyMiddleware(
          routerMiddleware(history), // for dispatching history actions
          applyMiddleware(ReduxThunk)
          // ... other middlewares ...
        ),
      ),
    )
  
    return store
  }

// const store = createStore(rootReducer, applyMiddleware(ReduxThunk));  //local storage overridded


// export default store;