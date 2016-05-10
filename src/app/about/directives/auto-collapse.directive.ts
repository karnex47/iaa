import {Directive, Component, ElementRef, Renderer} from 'angular2/core';

@Directive ({
  selector: '[auto-collapse]',
})

export class AutoCollapse {
  private element: HTMLElement;

  constructor(element: ElementRef, renderer: Renderer) {
    this.element = element.nativeElement;
  }
}
