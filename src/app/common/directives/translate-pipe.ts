import {Pipe, PipeTransform} from 'angular2/core';
import {getTranslations} from '../utils/utils';
import {AppState} from "../../app.service";

const _ = require('lodash');

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private translations: any;
  private translationFetch: Promise<any>;

  constructor(public appState: AppState) {}

  transform(value:string, args:string[]) : any {
    if(!this.translationFetch) {
      this.translationFetch = getTranslations(_.isEmpty(this.appState.get('lang')) ? 'en_US' : this.appState.get('lang'))
        .then(translations => this.translations = translations)
    }
    if(this.translations) {
      return _.get(this.translations, value, false) || value;
    }
  }
}
