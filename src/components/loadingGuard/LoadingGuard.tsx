import * as React from 'react';

export interface LoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
}

export function LoadingGuard(props: LoadingProps) {
  const loading = <div className="loading-guard">loading...</div>;
  return <div>{props.isLoading ? loading : props.children}</div>;
}
