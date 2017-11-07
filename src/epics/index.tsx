import { Epic } from 'redux-observable';
import { StoreState } from '../types';
import { EnthusiasmAction, incrementEnthusiasm } from '../actions';
import { DELAYED_INCREMENT } from '../constants';
import 'rxjs/Rx';

export const rootEpic: Epic<EnthusiasmAction, StoreState> = action$ => action$
  .ofType(DELAYED_INCREMENT)
  .delay(500)
  .mapTo(incrementEnthusiasm());
