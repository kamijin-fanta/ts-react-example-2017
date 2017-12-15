import { Epic, combineEpics } from 'redux-observable';
import { StoreState } from '../../types';
import { Action } from '../../action';
import { responseTodo } from './actions';
import { FetchTodo, Actions } from './actionTypes';
import { LOCATION_CHANGE, LocationChangeAction } from 'react-router-redux';
import 'rxjs/Rx';

const todoEpics: Epic<Action, StoreState> = (action, store) =>
  action
    .ofType(Actions.FetchTodo)
    .map((act: FetchTodo) => {
      const data = Array(90)
        .fill('todo')
        .map((v, i) => v + i);
      const offset = act.page * 10;
      return responseTodo(data.slice(offset, offset + 10), 90);
    })
    .delay(100);

const handleRoute: Epic<LocationChangeAction, StoreState> = (action, store) =>
  action.ofType(LOCATION_CHANGE).filter((act: LocationChangeAction) => {
    return false;
  });

export const epic: Epic<Action, StoreState> = combineEpics(todoEpics, handleRoute);
