import { LocationChangeAction } from 'react-router-redux';
import { Action as Actions } from './containers/action';

export type Action = Actions | LocationChangeAction;
