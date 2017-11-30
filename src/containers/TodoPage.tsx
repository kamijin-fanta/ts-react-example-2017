import * as React from 'react';
import { TodoPage, TodoProps, TodoHandler } from '../components/TodoPage';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch, InferableComponentEnhancer } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { push } from 'react-router-redux';
import { createSelector } from 'reselect';

export interface TodoPageRouteParams {
  page: string;
}

const selector = createSelector(
  (state: StoreState, props: RouteComponentProps<TodoPageRouteParams>) => state.todo.todos,
  state => state.todo.matches,
  (_, props) => props.match.params.page,
  (_, props) => props,
  (todoList, matches, page, props) => ({
    todoList,
    page: (+page ? +page : 1) - 1,
    maxPage: matches / 10, // per page
    params: props,
  }),
);

function mapDispatchToProps(dispatch: Dispatch<actions.TodoAction>) {
  return {
    changePage: (page: number) => {
      dispatch(push(`/todo/${page + 1}`));
    },
    update: (page: number) => dispatch(actions.FetchTodo(page)),
  };
}

export default connect<TodoProps, TodoHandler>(selector, mapDispatchToProps)(TodoPage);
