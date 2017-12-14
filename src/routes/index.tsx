import Hello from '../containers/Hello';
import TodoPage from '../containers/TodoPage';
import { About } from '../components/About';

import { Path, RoutePath, ParameterProps, EmptyParameterProps, OptionalParameterProps } from './lib';

export const Routes: RoutesType = {
  Hello: Path({ url: '/', title: 'Top Page', component: Hello }),
  About: Path({ url: '/about', title: 'About', component: About }),
  Contact: Path({ url: '/about/contact', title: 'About' }),
  Todo: Path({ url: '/todo/:page?', title: 'todo page', component: TodoPage }),
};

interface RoutesType {
  Hello: RoutePath<HelloRouteProps, EmptyParameterProps>;
  About: RoutePath<TodoRouteProps, EmptyParameterProps>;
  Contact: RoutePath<TodoRouteProps, EmptyParameterProps>;
  Todo: RoutePath<EditTodoRouteProps, OptionalParameterProps<EditTodoRouteProps>>;
}
export interface HelloRouteProps {}
export interface TodoRouteProps {}
export interface EditTodoRouteProps {
  page?: string;
}
