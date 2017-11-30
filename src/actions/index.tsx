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

export interface ChangeLoading {
  type: constants.CHANGE_LOADING;
  payload: boolean;
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm | DelayedIncrementEnthusiasm | ChangeLoading;

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

export function ChangeLoading(payload: boolean): ChangeLoading {
  return {
    type: constants.CHANGE_LOADING,
    payload,
  };
}

// service

export interface FetchTodo {
  type: constants.FETCH_TODO;
  page: number;
}

export function FetchTodo(page: number): FetchTodo {
  return {
    type: constants.FETCH_TODO,
    page,
  };
}

export interface ResponseTodo {
  type: constants.RESPONSE_TODO;
  payload: string[];
  matches: number;
}

export function ResponseTodo(payload: string[], matches: number): ResponseTodo {
  return {
    type: constants.RESPONSE_TODO,
    payload,
    matches,
  };
}

export interface ChangePage {
  type: constants.CHANGE_PAGE_TODO;
  payload: number;
}

export function ChangePage(payload: number): ChangePage {
  return {
    type: constants.CHANGE_PAGE_TODO,
    payload,
  };
}

export type TodoAction = FetchTodo | ResponseTodo | ChangePage;

import { LOCATION_CHANGE, LocationChangeAction } from 'react-router-redux';

export type Action = TodoAction | EnthusiasmAction | LocationChangeAction;
