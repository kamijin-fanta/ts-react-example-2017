import * as React from 'react';
import { Route, Router, RouteProps, Switch, match } from 'react-router';
import { NavLink, Link, NavLinkProps } from 'react-router-dom';
import * as H from 'history';
import autobind from 'autobind-decorator';
import pathToRegexp = require('path-to-regexp');

export interface RouteDef {
  url: string;
  title: string;
  component?: React.ComponentType;
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
