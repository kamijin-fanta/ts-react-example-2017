import * as React from 'react';
import { Route, Router, RouteProps, Switch } from 'react-router';
import { NavLink, NavLinkProps } from 'react-router-dom';

import Hello from '../containers/Hello';
import TodoPage from '../containers/TodoPage';
import { About } from '../components/About';
import { SideMenu } from '../components/SideMenu';
import { Layout } from './Layout';
import { Routes } from '../routes/index';

export function RootPage() {
  return (
    <div className="root-page">
      <Layout>
        <div>
          <Routes.Hello.Route exact={true} />
          <Routes.About.Route />
          <Routes.Todo.Route />
        </div>
      </Layout>
    </div>
  );
}
