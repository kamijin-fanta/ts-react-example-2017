import * as React from 'react';
import { TodoPage, TodoProps, TodoHandler } from '../components/TodoPage';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect, Dispatch, InferableComponentEnhancer } from 'react-redux';
import { createSelector } from 'reselect';

const selector = createSelector(
  (state: StoreState) => state.todo.todos,
  state => state.todo.page,
  state => state.todo.matches,
  (todoList, page, matches) => ({
    todoList,
    page,
    maxPage: matches / 10, // per page
  }),
);

function mapDispatchToProps(dispatch: Dispatch<actions.TodoAction>) {
  return {
    changePage: (page: number) => {
      dispatch(actions.ChangePage(page));
      dispatch(actions.FetchTodo(page));
    },
    didMount: (props: TodoProps) => dispatch(actions.FetchTodo(props.page)),
  };
}

export default connect<TodoProps, TodoHandler>(selector, mapDispatchToProps)(TodoPage);
