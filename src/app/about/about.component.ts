import {Component} from 'angular2/core';
import {TranslatePipe} from "../common/directives/translate-pipe";
import {AutoCollapse} from "./directives/auto-collapse.directive";
import {ParagraphTransform} from "./pipes/paragraph-transform.pipe";

@Component({
  selector: 'about',
  styles: [require('./about.scss')],
  template: require('./about.html'),
  pipes: [ TranslatePipe, ParagraphTransform ],
  directives: [AutoCollapse]
})
export class About {}
