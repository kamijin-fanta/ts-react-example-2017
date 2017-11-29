import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { enthusiasm, todo } from './reducers/index';
import { StoreState } from './types/index';
import { rootEpic } from './epics';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';

export const history = createHistory();

const middlewares = applyMiddleware(createEpicMiddleware(rootEpic), routerMiddleware(history));

export const store = createStore<StoreState>(
  combineReducers({
    enthusiasm,
    todo,
    form: formReducer,
    router: routerReducer,
  }),
  composeWithDevTools(middlewares),
);
