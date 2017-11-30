import { Epic, combineEpics } from 'redux-observable';
import { StoreState } from '../types';
import { Action, incrementEnthusiasm, FetchTodo, ResponseTodo, ChangeLoading } from '../actions';
import { DELAYED_INCREMENT, FETCH_TODO } from '../constants';
import { LOCATION_CHANGE, LocationChangeAction } from 'react-router-redux';
import 'rxjs/Rx';

const enthusiasmEpics: Epic<Action, StoreState> = (action, store) =>
  action
    .ofType(DELAYED_INCREMENT)
    .map(t => {
      store.dispatch(ChangeLoading(true));
      return t;
    })
    .delay(500)
    .map(() => {
      store.dispatch(ChangeLoading(false));
      return incrementEnthusiasm();
    });

const todoEpics: Epic<Action, StoreState> = (action, store) =>
  action
    .ofType(FETCH_TODO)
    .map((act: FetchTodo) => {
      const data = Array(90)
        .fill('todo')
        .map((v, i) => v + i);
      const offset = act.page * 10;
      return ResponseTodo(data.slice(offset, offset + 10), 90);
    })
    .delay(100);

const handleRoute: Epic<LocationChangeAction, StoreState> = (action, store) =>
  action.ofType(LOCATION_CHANGE).filter((act: LocationChangeAction) => {
    return false;
  });

export const rootEpic: Epic<Action, StoreState> = combineEpics(enthusiasmEpics, todoEpics, handleRoute);
