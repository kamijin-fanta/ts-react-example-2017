export type Action = IncrementEnthusiasm | DecrementEnthusiasm | DelayedIncrementEnthusiasm | ChangeLoading;

export interface IncrementEnthusiasm {
  type: Actions.IncrementEnthusiasm;
}
export interface DecrementEnthusiasm {
  type: Actions.DecrementEnthusiasm;
}
export interface DelayedIncrementEnthusiasm {
  type: Actions.DelayedIncrementEnthusiasm;
}
export interface ChangeLoading {
  type: Actions.ChangeLoading;
  payload: boolean;
}

/***** Do not edit below this line *****/
export const enum Actions {
  IncrementEnthusiasm = 'containers/enthusiasm/IncrementEnthusiasm',
  DecrementEnthusiasm = 'containers/enthusiasm/DecrementEnthusiasm',
  DelayedIncrementEnthusiasm = 'containers/enthusiasm/DelayedIncrementEnthusiasm',
  ChangeLoading = 'containers/enthusiasm/ChangeLoading',
}
