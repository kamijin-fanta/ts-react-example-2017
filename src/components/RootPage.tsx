import * as React from 'react';
import { Route, Router, RouteProps, Switch } from 'react-router';
import { NavLink, NavLinkProps } from 'react-router-dom';

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
