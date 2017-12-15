import * as React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { SideMenu } from './SideMenu';

it('side menu snapshot', () => {
  const wrapper = shallow(<SideMenu />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
