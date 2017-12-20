import * as React from 'react';
import { Route, NavLink, Link } from 'react-router-dom';
import { FormSubmitHandler } from 'redux-form';

import { FaHome, FaQuestion, FaListUl } from 'react-icons/lib/fa';
import { Routes } from '../../routes';

import './SideMenu.css';

export function SideMenu() {
  return (
    <div className="side-menu">
      <h1>SideMenu</h1>
      <ul>
        <li>
          <Routes.Hello.NavLink exact={true}>
            <FaHome />
            home
          </Routes.Hello.NavLink>
        </li>
        <li>
          <Routes.About.NavLink>
            <FaQuestion />
            about
          </Routes.About.NavLink>
          <ul>
            <li>
              <Routes.Contact.NavLink>
                <FaQuestion />
                contact
              </Routes.Contact.NavLink>
            </li>
            <li>
              <NavLink to="/about/notfound">notfound</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <Routes.Todo.NavLink>
            <FaListUl />
            todo
          </Routes.Todo.NavLink>
        </li>
        <li>
          <NavLink to="/notfound">notfound</NavLink>
        </li>
        <li>
          Path: <Route children={props => props.location.pathname} />
        </li>
      </ul>
    </div>
  );
}
