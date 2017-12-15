import { Epic, combineEpics } from 'redux-observable';
import { StoreState } from '../../types';
import { Action } from '../../action';
import { changeLoading, incrementEnthusiasm } from './actions';
import { Actions } from './actionTypes';
import { LOCATION_CHANGE, LocationChangeAction } from 'react-router-redux';
import 'rxjs/Rx';

const enthusiasmEpics: Epic<Action, StoreState> = (action, store) =>
  action
    .ofType(Actions.DelayedIncrementEnthusiasm)
    .map(t => {
      store.dispatch(changeLoading(true));
      return t;
    })
    .delay(500)
    .map(() => {
      store.dispatch(changeLoading(false));
      return incrementEnthusiasm();
    });

export const epic: Epic<Action, StoreState> = combineEpics(enthusiasmEpics);
