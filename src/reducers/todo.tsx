import { TodoAction } from '../actions';
import { TodoState } from '../types/index';
import * as constants from '../constants/index';

const initialStatet: TodoState = {
  todos: [],
  page: 0,
  matches: 0,
};

export function todo(state: TodoState = initialStatet, action: TodoAction): TodoState {
  switch (action.type) {
    case constants.RESPONSE_TODO:
      return { ...state, todos: action.payload, matches: action.matches };
    case constants.CHANGE_PAGE_TODO:
      return { ...state, page: action.payload };
    default:
      return state;
  }
}
