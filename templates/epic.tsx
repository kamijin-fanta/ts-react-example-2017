import { Epic, combineEpics } from 'redux-observable';
import { LOCATION_CHANGE, LocationChangeAction } from 'react-router-redux';
import 'rxjs/Rx';

import { StoreState } from '../../types';
import { Action } from '../../action';
import { Actions } from './actionTypes';
import {  } from './actions';

const enthusiasmEpics: Epic<Action, StoreState> = (action, store) =>
  action
    .ofType(Actions.)
    .filter(act => false);

export const epic: Epic<Action, StoreState> = combineEpics(enthusiasmEpics);
