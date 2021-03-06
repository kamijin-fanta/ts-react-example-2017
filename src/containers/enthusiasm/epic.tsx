import { Epic, combineEpics } from 'redux-observable';
import { LOCATION_CHANGE, LocationChangeAction } from 'react-router-redux';
import 'rxjs/Rx';

import { StoreState } from '../../types';
import { Action } from '../../action';
import { Actions } from './actionTypes';
import { changeLoading, incrementEnthusiasm } from './actions';

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
