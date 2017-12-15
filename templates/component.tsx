import * as React from 'react';

export interface ComponentProps {
  children: React.ReactNode;
}

export function Component(props: ComponentProps) {
  return <div>content</div>;
}
