import Hello from '../containers/Hello';
import TodoPage from '../containers/TodoPage';
import { About } from '../components/About';
import { Path, RoutePath, ParameterProps, EmptyParameterProps, OptionalParameterProps } from './lib';
export const Routes: RoutesType = {
  Hello: Path({
    url: '/',
    title: 'Top Page',
    component: Hello,
  }),
  Todo: Path({
    url: '/todo/:page?/:tag',
    title: 'todo page',
    component: TodoPage,
  }),
};

/***** Do not edit below this line *****/
export interface RoutesType {
  Hello: RoutePath<HelloRouteProps, EmptyParameterProps>;
  Todo: RoutePath<TodoRouteProps, ParameterProps<TodoRouteProps>>;
}
export interface HelloRouteProps {}
export interface TodoRouteProps {
  page?: string;
  tag: string;
}
