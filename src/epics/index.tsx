import { Epic, combineEpics } from 'redux-observable';
import { StoreState } from '../types';
import { Action, incrementEnthusiasm, FetchTodo, ResponseTodo } from '../actions';
import { DELAYED_INCREMENT, FETCH_TODO } from '../constants';
import 'rxjs/Rx';

const enthusiasmEpics: Epic<Action, StoreState> = action$ =>
  action$
    .ofType(DELAYED_INCREMENT)
    .delay(500)
    .mapTo(incrementEnthusiasm());

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

export const rootEpic: Epic<Action, StoreState> = combineEpics(enthusiasmEpics, todoEpics);
