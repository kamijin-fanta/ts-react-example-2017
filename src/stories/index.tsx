import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { MemoryRouter } from 'react-router';

import About from '../components/About';
import Hello from '../components/Hello';

storiesOf('Basic', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('Hello', () => (
    <Hello name="hogehoge" />
  ))
  .add('About', () => (
    <About />
  ));
