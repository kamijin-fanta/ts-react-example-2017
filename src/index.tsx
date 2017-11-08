import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Hello from './containers/Hello';
import About from './components/About';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { rootEpic } from './epics';
import { Route } from 'react-router';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';

const history = createHistory();
const routeMiddleware = routerMiddleware(history);

const epicMiddleware = createEpicMiddleware(rootEpic);
const store = createStore<StoreState>(
  enthusiasm, {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  },
  composeWithDevTools(
    applyMiddleware(
      epicMiddleware,
      routeMiddleware
    )
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}  >
      <div>
        <Route exact={true} path="/" component={Hello} />
        <Route path="/about" component={About} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
