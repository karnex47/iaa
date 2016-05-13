import {getLocalUrl} from '../config';
const fetch = require('isomorphic-fetch');

let cache = {};

export function getTranslations(locale) {
  const url = `${getLocalUrl('translations')}\\${locale}.json`;
  if(!cache[url]) {
    cache[url] = fetch(url).then(response =>response.json());
  }
  return (cache[url])
}
