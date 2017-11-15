import * as React from "react";
import { i18n } from "i18next";

export interface TranslateOptions {
    withRef?: boolean;
    bindI18n?: string;
    bindStore?: string;
    translateFuncName?: string;
    wait?: boolean;
    nsMode?: string;
    i18n?: i18n;
}

// tslint:disable-next-line:ban-types
// export default function translate<TKey extends string = string>(namespaces?: TKey[] | TKey, options?: TranslateOptions): <C extends Function>(WrappedComponent: C) => C;
export default function translate<P, TKey extends string = string>(namespaces?: TKey[] | TKey, options?: TranslateOptions):
<C extends React.ComponentType<P>>
(WrappedComponent: C) => React.StatelessComponent<P>;
