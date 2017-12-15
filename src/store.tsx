import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { StoreState } from './types/index';
import { rootEpic } from './epics';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as form } from 'redux-form';
import rootReducer from './reducer';

export const history = createHistory();

const middlewares = applyMiddleware(createEpicMiddleware(rootEpic), routerMiddleware(history));

export const store = createStore<StoreState>(
  combineReducers({
    ...rootReducer,
    form,
    router: routerReducer,
  }),
  composeWithDevTools(middlewares),
);
