import * as React from 'react';
import { Route, Router, RouteProps, Switch } from 'react-router';
import { NavLink, NavLinkProps } from 'react-router-dom';

import { Layout } from './layout/Layout';
import { Routes } from '../routes/index';
import { NotFound } from '../routes/lib';

export function RootPage() {
  return (
    <div className="root-page">
      <Layout>
        <div>
          <Routes.Hello.Route exact={true} />
          <Routes.About.Route />
          <Routes.Todo.Route />
          <NotFound routes={Routes}>not found</NotFound>
        </div>
      </Layout>
    </div>
  );
}
