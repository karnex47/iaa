import {Pipe, PipeTransform} from 'angular2/core';
const _ = require('lodash');

@Pipe({
  name: 'paragraphTransform',
  pure: false
})

export class ParagraphTransform implements PipeTransform {
  transform(value:string[], args:string[]): any {
    return _.reduce(value, function(memo, para) {
      return memo += '<p>'+para+'</p>'
    }, '')
  }
}
