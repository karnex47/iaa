/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import {RouterActive} from './router-active/router-active.directive';
import {Home} from './home/home.component';
import {About} from './about/about.component';
import {ViewEncapsulation} from "angular2/core";
import {bootstrap} from "angular2/bootstrap";
import {TranslatePipe} from "./common/directives/translate-pipe";
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";

const bowser = require('bowser');
const classNames = require('classnames');
const _ = require('lodash');
import {getLocalUrl} from './common/config';
import {CORE_DIRECTIVES} from "angular2/common";
import {DROPDOWN_DIRECTIVES} from "ng2-bootstrap/ng2-bootstrap";
import {Dojos} from "./dojos/dojos.component";



/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  providers: [ ...FORM_PROVIDERS ],
  directives: [ ...ROUTER_DIRECTIVES, RouterActive, CORE_DIRECTIVES, DROPDOWN_DIRECTIVES ],
  pipes: [TranslatePipe],
  styles: [require('./app.scss')],
  template: require('./app.html'),
  encapsulation: ViewEncapsulation.None
})
@RouteConfig([
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/dojos', component: Dojos, name: 'Dojos'}
])
export class App {
  imageUrl = getLocalUrl('images');
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  url = 'https://twitter.com/AngularClass';
  scrolled = false;
  lastScrolledPosition = 0;
  classes = classNames(_.pick(bowser, 'mobile', 'chrome', 'firefox', 'msie', 'msedge', 'android', 'ios', 'safari', 'opera', 'mac', 'windows', 'windowsphone', 'linux', 'chromeos'));
  constructor(public router: Router) {}

  isActive(instruction: any[]): boolean {
    return this.router.isRouteActive(this.router.generate(instruction));
  }

  isScrolled(): boolean {
    return this.scrolled;
  }

  onScroll(event) {
    if(window.scrollY > this.lastScrolledPosition) {
      this.scrolled = true;
    }
    else {
      this.scrolled = false;
    }
    this.lastScrolledPosition = window.scrollY;
  }
}
