import { EnthusiasmAction } from '../actions';
import { StoreState, EnthusiasmState } from '../types/index';
import * as constants from '../constants/index';

const initialStatet: EnthusiasmState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
  loading: false,
};

export function enthusiasm(state: EnthusiasmState = initialStatet, action: EnthusiasmAction): EnthusiasmState {
  switch (action.type) {
    case constants.INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case constants.DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    case constants.CHANGE_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}
