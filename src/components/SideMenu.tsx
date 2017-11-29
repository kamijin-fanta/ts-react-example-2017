import * as React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import { FormSubmitHandler } from 'redux-form';

import { FaHome, FaQuestion, FaListUl } from 'react-icons/lib/fa';

import './SideMenu.css';

export function SideMenu() {
  return (
    <div className="side-menu">
      <h1>SideMenu</h1>
      <ul>
        <li>
          <NavLink to="/" exact={true}>
            <FaHome />
            home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            <FaQuestion />
            about
          </NavLink>
          <ul>
            <li>
              <NavLink to="/about/contact">
                <FaQuestion />
                contact
              </NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink to="/todo">
            <FaListUl />
            todo
          </NavLink>
        </li>
        <li>
          Path: <Route children={props => props.location.pathname} />
        </li>
      </ul>
    </div>
  );
}
