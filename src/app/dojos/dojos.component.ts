import {Component} from 'angular2/core';
import {TranslatePipe} from "../common/directives/translate-pipe";

@Component({
  selector: 'dojo',
  pipes: [TranslatePipe],
  styles: [require('./dojos.scss')],
  template: require('./dojos.html')
})

export class Dojos {}
