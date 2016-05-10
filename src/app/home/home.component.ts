import {Component} from 'angular2/core';
import {TranslatePipe} from "../common/directives/translate-pipe";

@Component({
  selector: 'home',
  providers: [],
  pipes: [ TranslatePipe ],
  styles: [ require('./home.scss') ],
  template: require('./home.html')
})
export class Home {

}
