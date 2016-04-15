var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * Angular 2 decorators and services
 */
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var common_1 = require('angular2/common');
var router_active_1 = require('./directives/router-active');
var home_1 = require('./home/home');
var core_2 = require("angular2/core");
var bootstrap_1 = require("angular2/bootstrap");
var translate_pipe_1 = require("./common/directives/translate-pipe");
var router_2 = require("angular2/router");
var http_1 = require("angular2/http");
var bowser = require('bowser');
var classNames = require('classnames');
var _ = require('lodash');
var config_1 = require('./common/config');
var common_2 = require("angular2/common");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(router) {
        this.router = router;
        this.imageUrl = config_1.getLocalUrl('images');
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.url = 'https://twitter.com/AngularClass';
        this.scrolled = false;
        this.lastScrolledPosition = 0;
        this.classes = classNames(_.pick(bowser, 'mobile', 'chrome', 'firefox', 'msie', 'msedge', 'android', 'ios', 'safari', 'opera', 'mac', 'windows', 'windowsphone', 'linux', 'chromeos'));
    }
    App.prototype.isActive = function (instruction) {
        return this.router.isRouteActive(this.router.generate(instruction));
    };
    App.prototype.isScrolled = function () {
        return this.scrolled;
    };
    App.prototype.onScroll = function (event) {
        if (window.scrollY > this.lastScrolledPosition) {
            this.scrolled = true;
        }
        else {
            this.scrolled = false;
        }
        this.lastScrolledPosition = window.scrollY;
    };
    App = __decorate([
        core_1.Component({
            selector: 'app',
            providers: common_1.FORM_PROVIDERS.slice(),
            directives: router_1.ROUTER_DIRECTIVES.concat([router_active_1.RouterActive, common_2.CORE_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES]),
            pipes: [translate_pipe_1.TranslatePipe],
            styles: [require('./app.scss')],
            template: require('./app.html'),
            encapsulation: core_2.ViewEncapsulation.None
        }),
        router_1.RouteConfig([
            { path: '/', component: home_1.Home, name: 'Index' },
            { path: '/home', component: home_1.Home, name: 'Home' },
            // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
            { path: '/about', loader: function () { return require('es6-promise!./about/about')('About'); }, name: 'About' },
            { path: '/**', redirectTo: ['Index'] }
        ]), 
        __metadata('design:paramtypes', [router_1.Router])
    ], App);
    return App;
})();
exports.App = App;
bootstrap_1.bootstrap(App, [translate_pipe_1.TranslatePipe, router_2.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=app.component.js.map