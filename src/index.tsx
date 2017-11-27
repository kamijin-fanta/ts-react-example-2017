import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import { history, store } from './store';
import { I18nextProvider } from 'react-i18next';
import { RootPage } from './components/RootPage';

import i18n from './i18n';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <ConnectedRouter history={history}>
        <RootPage />
      </ConnectedRouter>
    </I18nextProvider>
  </Provider>,
  document.getElementById('root') as HTMLElement,
);
