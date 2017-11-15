import * as React from 'react';
import './Hello.css';

import { Trans, translate, TranslationFunction, InjectedTranslateProps } from 'react-i18next';

export interface HelloProps {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
  onDeleyedIncrement?: () => void;
}

function HelloCompornent(props: HelloProps & InjectedTranslateProps) {
  const { name, enthusiasmLevel = 1, onIncrement, onDecrement, onDeleyedIncrement, t } = props;
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic. :D');
  }

  return (
    <div className="hello">
      <div className="greeting">Hello {name + getExclamationMarks(enthusiasmLevel)}</div>
      <div>translate: {t('cancel')}</div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDeleyedIncrement}>+</button>
      </div>
    </div>
  );
}

export const Hello = translate<HelloProps>()(HelloCompornent);

// helpers

function getExclamationMarks(numChars: number) {
  return Array(numChars + 1).join('!');
}
