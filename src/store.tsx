import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { rootEpic } from './epics';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory();

export const store = createStore<StoreState>(
  enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  },
  composeWithDevTools(
    applyMiddleware(
      createEpicMiddleware(rootEpic),
      routerMiddleware(history),
    )
  )
);
