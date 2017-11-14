import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { rootEpic } from './epics';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';

export const history = createHistory();

const middlewares = applyMiddleware(createEpicMiddleware(rootEpic), routerMiddleware(history));

export const store = createStore<StoreState>(
  combineReducers({
    enthusiasm,
    form: formReducer,
  }),
  composeWithDevTools(middlewares),
);
