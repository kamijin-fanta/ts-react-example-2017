import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as form } from 'redux-form';

import { StoreState } from './types/index';
import rootReducer from './reducer';
import { epics } from './containers/epics';

export const history = createHistory();

const middlewares = applyMiddleware(
  createEpicMiddleware(combineEpics(...epics)),
  routerMiddleware(history),
);

export const store = createStore<StoreState>(
  combineReducers({
    ...rootReducer,
    form,
    router: routerReducer,
  }),
  composeWithDevTools(middlewares),
);
