import { Epic, combineEpics } from 'redux-observable';
import { StoreState } from '../types';
import { Action } from '../action';
import { Actions as EnthusiasmActions } from '../containers/enthusiasm/actionTypes';
import { incrementEnthusiasm, changeLoading } from '../containers/enthusiasm/actions';
import { FetchTodo, Actions as TodoActions } from '../containers/todo/actionTypes';
import { responseTodo } from '../containers/todo/actions';
import { LOCATION_CHANGE, LocationChangeAction } from 'react-router-redux';
import 'rxjs/Rx';

const enthusiasmEpics: Epic<Action, StoreState> = (action, store) =>
  action
    .ofType(EnthusiasmActions.DelayedIncrementEnthusiasm)
    .map(t => {
      store.dispatch(changeLoading(true));
      return t;
    })
    .delay(500)
    .map(() => {
      store.dispatch(changeLoading(false));
      return incrementEnthusiasm();
    });

const todoEpics: Epic<Action, StoreState> = (action, store) =>
  action
    .ofType(TodoActions.FetchTodo)
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

export const rootEpic: Epic<Action, StoreState> = combineEpics(enthusiasmEpics, todoEpics, handleRoute);
