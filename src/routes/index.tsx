import Hello from '../containers/enthusiasm/Hello';
import TodoPage from '../containers/todo/TodoPage';
import { About } from '../components/About';
import { Path, RoutePath, ParameterProps, EmptyParameterProps, OptionalParameterProps } from './lib';
export const Routes: RoutesType = {
  Hello: Path({
    url: '/',
    title: 'Top Page',
    component: Hello,
  }),
  About: Path({
    url: '/about',
    title: 'about',
    component: About,
  }),
  Contact: Path({
    url: '/about/contact',
    title: 'about',
  }),
  Todo: Path({
    url: '/todo/:page?',
    title: 'todo page',
    component: TodoPage,
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
