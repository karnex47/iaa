import {getLocalUrl} from '../config';
const fetch = require('isomorphic-fetch');

export function getTranslations(locale) {
  const url = getLocalUrl('translations');
  return fetch(`${url}\\${locale}.json`).then(response =>response.json());
}
