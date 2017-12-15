import { Action, Actions } from './actionTypes';
import { StoreState, EnthusiasmState } from '../../types/index';

const initialStatet: EnthusiasmState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
  loading: false,
};

export function enthusiasm(state: EnthusiasmState = initialStatet, action: Action): EnthusiasmState {
  switch (action.type) {
    case Actions.IncrementEnthusiasm:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case Actions.DecrementEnthusiasm:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    case Actions.ChangeLoading:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
