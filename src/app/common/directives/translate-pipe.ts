import {Pipe, PipeTransform} from 'angular2/core';
import {getTranslations} from '../utils/utils';
import {Injectable} from "angular2/core";
import {AppState} from "../../app.service";
import {NgZone} from "angular2/core";

const _ = require('lodash');

@Injectable()
@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  private translations: any;
  private translationFetch: Promise<any>;
  private currentLang: string;

  constructor(public appState: AppState, public zone: NgZone) {}

  transform(key:string, args:string[]) : any {
    if(this.currentLang !== this.appState.get('lang')) {
      this.currentLang = _.isEmpty(this.appState.get('lang'))?'en_US':this.appState.get('lang');
      getTranslations(this.currentLang)
        .then(translations => {
          this.translations = translations;
          this.zone.run(() => {});
        })
    }
    if(this.translations) {
      return _.get(this.translations, key, key);
    }
  }
}
