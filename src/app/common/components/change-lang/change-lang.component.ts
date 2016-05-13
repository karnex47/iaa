import {Component} from 'angular2/core';
import {AppState} from "../../../app.service";
import {CORE_DIRECTIVES} from "angular2/common";
import {DROPDOWN_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {TranslatePipe} from "../../directives/translate-pipe";

const _ = require('lodash');

@Component({
  selector: 'change-lang',
  styles: [require('./change-lang.scss')],
  template: require('./change-lang.html'),
  directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES],
  pipes: [ TranslatePipe ]
})

export  class ChangeLang {
  public currentLang: string;
  constructor(public appState: AppState) {
    this.currentLang = _.result(appState, "get('lang')", 'en_US');
  }

  isActive(language: string): boolean {
    return language.toLocaleLowerCase() === this.currentLang.toLocaleLowerCase();
  }

  setLang(lang) {
    this.currentLang = lang;
    this.appState.set('lang', lang);
  }
}
