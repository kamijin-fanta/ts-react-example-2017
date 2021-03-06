/* tslint:disable:no-any */

import * as i18next from 'i18next';
import * as XHR from 'i18next-xhr-backend';
import { BackendOptions, AjaxRequestCallback } from 'i18next-xhr-backend';
import * as LanguageDetector from 'i18next-browser-languagedetector';
import { I18nextProvider } from 'react-i18next';
const locizeBackend = require('i18next-locize-backend').default;
const { setI18n } = require('react-i18next');

////////// BASE
const baseOptions = {
  fallbackLng: 'ja-JP',
  debug: true,

  interpolation: {
    escapeValue: false,
  },

  ns: 'test',
  defaultNS: 'test',

  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default',
  },
};

////////// locize for Develop
const locize = i18next
  .use(locizeBackend)
  .use(LanguageDetector)
  .use(I18nextProvider)
  .init({
    backend: {
      projectId: 'e060290d-9298-4daa-8c15-50e9dd3f0692',
      referenceLng: 'ja',
      version: 'latest',
    },
    ...baseOptions,
  } as any);

////////// Local for Production
function loadLocales(
  url: string,
  options: BackendOptions,
  callback: AjaxRequestCallback,
  data: {} | string,
  cache: boolean,
) {
  var ng = () => callback('', { status: '404' } as any);
  var ok = (str: string) => callback(str, { status: '200' } as any);

  switch (url) {
    case 'latest/ja-JP/test.json':
    case 'latest/ja/test.json':
      ok(require('./latest/ja-JP/test.json'));
      break;
    default:
      ng();
      break;
  }
}

const local = i18next
  .use(XHR)
  .use(LanguageDetector)
  .use(I18nextProvider)
  .init({
    backend: {
      loadPath: 'latest/{{lng}}/{{ns}}.json',
      parse: (data: any) => (typeof data === 'string' ? JSON.parse(data) : data),
      ajax: loadLocales,
    },
    ...baseOptions,
  } as any);

////////// Publish
const i18n: i18next.i18n = true ? locize : local;
// setI18n(i18n);
export default i18n;
