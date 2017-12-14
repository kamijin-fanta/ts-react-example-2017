import plugin from './s2s-typed-react-router';
import pluginTester from 'babel-plugin-tester';

pluginTester({
  plugin,
  pluginOptions: {
  },
  snapshot: true,
  tests: [
    {
      title: 'single',
      code: `
        import { Path ,} from './lib';
        
        export const Routes: RoutesType = {
          Hello: Path({ url: '/', title: 'Top Page', component: Hello }),
          TodoView: Path({ url: '/todo/view/:page?', title: 'view todo', component: TodoView }),
          TodoEdit: Path({ url: '/todo/edit/:id', title: 'edit todo', component: TodoEdit }),
          TodoAdd: Path({ url: '/todo/add/:parent/:genre?', title: 'add todo', component: TodoAdd }),
        };

        /***** Do not edit below this line *****/
        export interface RoutesType {
          Hello: RoutePath<HelloRouteProps, EmptyParameterProps>;
          TodoView: RoutePath<TodoViewRouteProps, OptionalParameterProps<TodoViewRouteProps>>;
          TodoEdit: RoutePath<TodoEditRouteProps, ParameterProps<TodoEditRouteProps>>;
        }
        export interface HelloRouteProps {}
        interface TodoViewRouteProps {}
      `,
    },
  ],
});
