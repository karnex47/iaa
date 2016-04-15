import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {TranslatePipe} from "../common/directives/translate-pipe";

@Component({
  selector: 'home',
  providers: [],
  directives: [
    ...FORM_DIRECTIVES
  ],
  pipes: [ TranslatePipe ],
  styles: [ require('./home.scss') ],
  template: require('./home.html')
})
export class Home {

}
