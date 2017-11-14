import { EnthusiasmAction } from '../actions';
import { StoreState, EnthusiasmState } from '../types/index';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants/index';

const initialStatet: EnthusiasmState = {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
};

export function enthusiasm(state: EnthusiasmState = initialStatet, action: EnthusiasmAction): EnthusiasmState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: state.enthusiasmLevel + 1 };
    case DECREMENT_ENTHUSIASM:
      return { ...state, enthusiasmLevel: Math.max(1, state.enthusiasmLevel - 1) };
    default:
      return state;
  }
}
