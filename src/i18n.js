import { addLocaleData } from 'react-intl';
import deLocaleData from 'react-intl/locale-data/de';
import enLocaleData from 'react-intl/locale-data/en';
import esLocaleData from 'react-intl/locale-data/es';
import frLocaleData from 'react-intl/locale-data/fr';
import heLocaleData from 'react-intl/locale-data/he';
import hiLocaleData from 'react-intl/locale-data/hi';
import idLocaleData from 'react-intl/locale-data/id';
import itLocaleData from 'react-intl/locale-data/it';
import jaLocaleData from 'react-intl/locale-data/ja';
import koLocaleData from 'react-intl/locale-data/ko';
import nlLocaleData from 'react-intl/locale-data/nl';
import plLocaleData from 'react-intl/locale-data/pl';
import ptLocaleData from 'react-intl/locale-data/pt';
import ruLocaleData from 'react-intl/locale-data/ru';
import zhLocaleData from 'react-intl/locale-data/zh';

addLocaleData([
  ...deLocaleData,
  ...enLocaleData,
  ...esLocaleData,
  ...frLocaleData,
  ...heLocaleData,
  ...hiLocaleData,
  ...idLocaleData,
  ...itLocaleData,
  ...jaLocaleData,
  ...koLocaleData,
  ...nlLocaleData,
  ...plLocaleData,
  ...ptLocaleData,
  ...ruLocaleData,
  ...zhLocaleData,
]);

const de = require('./translations/de.json');
const en = require('./translations/en.json');
const es = require('./translations/es.json');
const fr = require('./translations/fr.json');
const he = require('./translations/he.json');
const hi = require('./translations/hi.json');
const id = require('./translations/id.json');
const it = require('./translations/it.json');
const ja = require('./translations/ja.json');
const ko = require('./translations/ko.json');
const nl = require('./translations/nl.json');
const pl = require('./translations/pl.json');
const pt = require('./translations/pt.json');
const ru = require('./translations/ru.json');
const zh = require('./translations/zh.json');

export const translationMessages = { de, en, es, fr, he, hi, id, it, ja, ko, nl, pl, pt, ru, zh };
export const appLocales = Object.keys(translationMessages);
export const navigatorLanguage = normalizeLanguageCode(navigator.language);
// export const navigatorLanguage = 'he'; //debug
// export const navigatorLanguage = 'en-US'; //debug

export function stripRegionCode(language) {
  if (!language) { return; }
  return language.toLowerCase().split(/[_-]+/)[0];
}

export function normalizeLanguageCode(language) {
  let normalizedCode = language.split(/[_-]+/);

  if (normalizedCode.length === 1) {
    normalizedCode = normalizedCode[0].toLowerCase();
  } else {
    normalizedCode[0] = normalizedCode[0].toLowerCase();
    normalizedCode[1] = normalizedCode[1].toUpperCase();
    normalizedCode = normalizedCode.join('-');
  }
  return normalizedCode;
}
