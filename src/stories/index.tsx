import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../store';

import About from '../components/About';
import Hello from '../containers/Hello';

storiesOf('Basic', module)
  .addDecorator(story => (
    <Provider store={store}>{story()}</Provider>
  ))
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Hello', () => (
    <Hello />
  ))
  .add('About', () => (
    <About />
  ));
