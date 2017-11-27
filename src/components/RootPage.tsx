import * as React from 'react';
import { Route, Router } from 'react-router';

import Hello from '../containers/Hello';
import { About } from '../components/About';
import { SideMenu } from '../components/SideMenu';
import { Layout } from './Layout';

export function RootPage() {
  return (
    <div className="root-page">
      <Layout>
        <div>
          <Route exact={true} path="/" component={Hello} />
          <Route path="/about/:id?" component={About} />
        </div>
      </Layout>
    </div>
  );
}
