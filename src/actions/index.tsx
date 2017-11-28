import * as constants from '../constants';

// enthusiasm

export interface IncrementEnthusiasm {
  type: constants.INCREMENT_ENTHUSIASM;
}

export interface DecrementEnthusiasm {
  type: constants.DECREMENT_ENTHUSIASM;
}

export interface DelayedIncrementEnthusiasm {
  type: constants.DELAYED_INCREMENT;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | DelayedIncrementEnthusiasm;

export function incrementEnthusiasm(): IncrementEnthusiasm {
  return {
    type: constants.INCREMENT_ENTHUSIASM,
  };
}

export function decrementEnthusiasm(): DecrementEnthusiasm {
  return {
    type: constants.DECREMENT_ENTHUSIASM,
  };
}

export function delayedIncrementEnthusiasm(): DelayedIncrementEnthusiasm {
  return {
    type: constants.DELAYED_INCREMENT,
  };
}

// service

export interface UsernameFetchService {
  type: constants.USERNAME_FETCH_SERVICE;
}

export type ServiceAction = UsernameFetchService;

export function UsernameFetchService(): UsernameFetchService {
  return {
    type: constants.USERNAME_FETCH_SERVICE,
  };
}
