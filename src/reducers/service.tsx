import { ServiceAction } from '../actions';
import { ServiceState } from '../types/index';
import { USERNAME_FETCH_SERVICE, DELAYED_INCREMENT } from '../constants/index';

const initialStatet: ServiceState = {
  username: '',
};

export function enthusiasm(state: ServiceState = initialStatet, action: ServiceAction): ServiceState {
  switch (action.type) {
    case USERNAME_FETCH_SERVICE:
      return state;
    default:
      return state;
  }
}

