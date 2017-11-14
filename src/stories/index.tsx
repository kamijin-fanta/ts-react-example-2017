import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../store';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

import About from '../components/About';
import Hello from '../containers/Hello';

storiesOf('Basic', module)
  .addDecorator(story => (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
      </I18nextProvider>
    </Provider>
  ))
  .add('Hello', () => <Hello />)
  .add('About', () => <About />);
