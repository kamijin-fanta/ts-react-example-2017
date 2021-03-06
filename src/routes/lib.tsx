import * as React from 'react';
import { Route, Router, RouteProps, Switch, match, matchPath } from 'react-router';
import { NavLink, Link, NavLinkProps } from 'react-router-dom';
import * as H from 'history';
import autobind from 'autobind-decorator';
import pathToRegexp = require('path-to-regexp');
import * as PropTypes from 'prop-types';

export interface RouteDef {
  url: string;
  title: string;
  component?: React.ComponentType;
  hasChildren?: boolean;
}

export type OptionalParameterProps<T> = ParameterProps<T> | EmptyParameterProps<T>;
export interface ParameterProps<T> {
  params: T;
}
export interface EmptyParameterProps<T = {}> {}

export interface IncompleteLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  replace?: boolean;
}
export interface IncompleteNavLinkProps extends IncompleteLinkProps {
  activeClassName?: string;
  activeStyle?: React.CSSProperties;
  exact?: boolean;
  strict?: boolean;
  location?: H.Location;
  isActive?<P>(match: match<P>, location: H.Location): boolean;
}

export function Path<T, T2 extends OptionalParameterProps<T>>(routeDef: RouteDef) {
  return new RoutePath(routeDef);
}

export class RoutePath<T, T2 extends OptionalParameterProps<T>> {
  def: RouteDef;
  compiledPath: pathToRegexp.PathFunction;
  constructor(routeDef: RouteDef) {
    this.def = routeDef;
    this.compiledPath = pathToRegexp.compile(routeDef.url);
  }

  @autobind
  genUrl(parms?: T) {
    return this.compiledPath(parms);
  }

  @autobind
  Link(props: IncompleteLinkProps & T2) {
    // tslint:disable-next-line no-any
    return <Link to={this.genUrl((props as any).params)} children={this.def.title} {...props} />;
  }

  @autobind
  NavLink(props: IncompleteNavLinkProps & T2) {
    // tslint:disable-next-line no-any
    return <NavLink to={this.genUrl((props as any).params)} children={this.def.title} {...props} />;
  }

  @autobind
  Route(props: RouteProps) {
    return <Route path={this.def.url} component={this.def.component} {...props} />;
  }
}

export interface NotFoundProps {
  // tslint:disable-next-line no-any
  routes: any;
  children: React.ReactNode;
  guard: React.ReactNode;
}

export class NotFoundGuard<T1, T2> extends React.Component<NotFoundProps> {
  static contextTypes = {
    router: PropTypes.shape({
      route: PropTypes.object.isRequired,
    }).isRequired,
  };
  render() {
    const { router: { route: { location } } } = this.context;
    const defs = Object.keys(this.props.routes)
      .map(compName => this.props.routes[compName])
      .map(routePath => (routePath as RoutePath<{}, {}>).def);

    for (let def of defs) {
      const isMatch = matchPath(location.pathname, { path: def.url, exact: def.hasChildren });
      if (isMatch) {
        return this.props.children;
      }
    }
    // tslint:disable-next-line no-any
    return this.props.guard;
  }
}
