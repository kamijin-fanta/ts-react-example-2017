import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../store';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

import { HelloContainer } from '../containers/enthusiasm';
import { About } from '../components/about/About';

storiesOf('Basic', module)
  .addDecorator(story => (
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
      </I18nextProvider>
    </Provider>
  ))
  .add('Hello', () => <HelloContainer />)
  .add('About', () => <About />);
