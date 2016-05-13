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
var router_active_directive_1 = require('./router-active/router-active.directive');
var home_component_1 = require('./home/home.component');
var about_component_1 = require('./about/about.component');
var dojos_component_1 = require("./dojos/dojos.component");
var change_lang_component_1 = require('./common/components/change-lang/change-lang.component');
var core_2 = require("angular2/core");
var translate_pipe_1 = require("./common/directives/translate-pipe");
var bowser = require('bowser');
var classNames = require('classnames');
var _ = require('lodash');
var config_1 = require('./common/config');
var common_1 = require("angular2/common");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var app_service_1 = require("./app.service");
/*
 * App Component
 * Top Level Component
 */
var App = (function () {
    function App(router, appState) {
        this.router = router;
        this.appState = appState;
        this.imageUrl = config_1.getLocalUrl('images');
        this.angularclassLogo = 'assets/img/angularclass-avatar.png';
        this.url = 'https://twitter.com/AngularClass';
        this.scrolled = false;
        this.lastScrolledPosition = 0;
        this.classes = classNames(_.pick(bowser, 'mobile', 'chrome', 'firefox', 'msie', 'msedge', 'android', 'ios', 'safari', 'opera', 'mac', 'windows', 'windowsphone', 'linux', 'chromeos'));
    }
    App.prototype.ngOnInit = function () {
        this.appState.set('lang', 'en_US');
    };
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
            directives: router_1.ROUTER_DIRECTIVES.concat([router_active_directive_1.RouterActive, common_1.CORE_DIRECTIVES, ng2_bootstrap_1.DROPDOWN_DIRECTIVES, change_lang_component_1.ChangeLang]),
            pipes: [translate_pipe_1.TranslatePipe],
            styles: [require('./app.scss')],
            template: require('./app.html'),
            encapsulation: core_2.ViewEncapsulation.None
        }),
        router_1.RouteConfig([
            { path: '/', component: home_component_1.Home, name: 'Home' },
            { path: '/about', component: about_component_1.About, name: 'About' },
            { path: '/dojos', component: dojos_component_1.Dojos, name: 'Dojos' }
        ]), 
        __metadata('design:paramtypes', [router_1.Router, app_service_1.AppState])
    ], App);
    return App;
})();
exports.App = App;
//# sourceMappingURL=app.component.js.map