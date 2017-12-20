import { HelloContainer } from '../containers/enthusiasm';
import { TodoContainer } from '../containers/todo';
import { About } from '../components/about/About';
import {
  Path,
  RoutePath,
  ParameterProps,
  EmptyParameterProps,
  OptionalParameterProps,
} from './lib';
export const Routes: RoutesType = {
  Hello: Path({
    url: '/',
    title: 'Top Page',
    component: HelloContainer,
    hasChildren: true,
  }),
  About: Path({
    url: '/about',
    title: 'about',
    component: About,
    hasChildren: true,
  }),
  Contact: Path({
    url: '/about/contact',
    title: 'about',
  }),
  Todo: Path({
    url: '/todo/:page?',
    title: 'todo page',
    component: TodoContainer,
  }),
};

/***** Do not edit below this line *****/
export interface RoutesType {
  Hello: RoutePath<HelloRouteProps, EmptyParameterProps>;
  About: RoutePath<AboutRouteProps, EmptyParameterProps>;
  Contact: RoutePath<ContactRouteProps, EmptyParameterProps>;
  Todo: RoutePath<TodoRouteProps, OptionalParameterProps<TodoRouteProps>>;
}
export interface HelloRouteProps {}
export interface AboutRouteProps {}
export interface ContactRouteProps {}
export interface TodoRouteProps {
  page?: string;
}
