import * as React from 'react';
import { Route, Router, RouteProps, Switch } from 'react-router';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { Layout } from './layout/Layout';
import { Routes } from '../routes/index';
import { NotFoundGuard } from '../routes/lib';

export function RootPage() {
  return (
    <div className="root-page">
      <Layout>
        <div>
          <NotFoundGuard routes={Routes} guard="not found">
            <Routes.Hello.Route exact={true} />
            <Routes.About.Route />
            <Routes.Todo.Route />
          </NotFoundGuard>
        </div>
      </Layout>
    </div>
  );
}
