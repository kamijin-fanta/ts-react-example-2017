require('raf').polyfill(global);
// see:
//   https://github.com/facebookincubator/create-react-app/pull/3340
//   https://github.com/Microsoft/TypeScript-React-Starter/issues/88

import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
