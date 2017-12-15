import * as React from 'react';
import { connect, Dispatch, InferableComponentEnhancer } from 'react-redux';
import { push } from 'react-router-redux';
import { createSelector } from 'reselect';

import { Action } from './actionTypes';
import { StoreState } from '../../types/index';
import {} from '../../components/';
import {} from './actions';

export interface TodoPageRouteParams {
  page: string;
}

const selector = createSelector(state => state.filed, filed => ({}));

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return {};
}

export default connect<ComponentProps, ComponentHandler>(selector, mapDispatchToProps)(Component);
