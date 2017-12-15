import { Action, Actions } from './actionTypes';
import { TodoState } from '../../types/index';

const initialStatet: TodoState = {
  todos: [],
  matches: 0,
};

export function todo(state: TodoState = initialStatet, action: Action): TodoState {
  switch (action.type) {
    case Actions.ResponseTodo:
      return { ...state, todos: action.payload, matches: action.matches };
    default:
      return state;
  }
}
