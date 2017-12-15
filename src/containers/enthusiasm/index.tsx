import { Hello } from '../../components/hello/Hello';
import * as actions from './actions';
import { Action } from './actionTypes';
import { StoreState } from '../../types/index';
import { connect, Dispatch } from 'react-redux';
import { createSelector } from 'reselect';

const selector = createSelector(
  (state: StoreState) => state.enthusiasm.enthusiasmLevel,
  state => state.enthusiasm.languageName,
  state => state.enthusiasm.loading,
  (enthusiasmLevel, name, loading) => ({
    enthusiasmLevel,
    name,
    loading,
  }),
);

export function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {
    onIncrement: () => {
      dispatch(actions.incrementEnthusiasm());
    },
    onDecrement: () => {
      dispatch(actions.decrementEnthusiasm());
    },
    onDeleyedIncrement: () => {
      dispatch(actions.delayedIncrementEnthusiasm());
    },
  };
}

export const HelloContainer = connect(selector, mapDispatchToProps)(Hello);
