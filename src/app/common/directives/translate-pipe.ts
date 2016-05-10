import {Pipe, PipeTransform} from 'angular2/core';
import {getTranslations} from '../utils/utils';
import {Injectable} from "angular2/core";

const _ = require('lodash');

@Injectable()
@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private translations: any;
  private translationFetch: Promise<any>;

  constructor() {}

  transform(value:string, args:string[]) : any {
    if(!this.translationFetch) {
      this.translationFetch = getTranslations('en_US')
        .then(translations => this.translations = translations)
    }
    if(this.translations) {
      return _.get(this.translations, value, false) || value;
    }
  }
}
