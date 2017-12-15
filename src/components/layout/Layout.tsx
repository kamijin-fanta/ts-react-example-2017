import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { FormSubmitHandler } from 'redux-form';
import { SideMenu } from '../sideMenu/SideMenu';

import './Layout.css';

export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return (
    <div className="layout container-fluid">
      <div className="row">
        <div className="menu col-3">
          <SideMenu />
        </div>
        <div className="content col">{props.children}</div>
      </div>
    </div>
  );
}
