var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var utils_1 = require('../utils/utils');
var core_2 = require("angular2/core");
var app_service_1 = require("../../app.service");
var core_3 = require("angular2/core");
var _ = require('lodash');
var TranslatePipe = (function () {
    function TranslatePipe(appState, zone) {
        this.appState = appState;
        this.zone = zone;
    }
    TranslatePipe.prototype.transform = function (key, args) {
        var _this = this;
        if (this.currentLang !== this.appState.get('lang')) {
            this.currentLang = _.isEmpty(this.appState.get('lang')) ? 'en_US' : this.appState.get('lang');
            utils_1.getTranslations(this.currentLang)
                .then(function (translations) {
                _this.translations = translations;
                _this.zone.run(function () { });
            });
        }
        if (this.translations) {
            return _.get(this.translations, key, key);
        }
    };
    TranslatePipe = __decorate([
        core_2.Injectable(),
        core_1.Pipe({
            name: 'translate',
            pure: false
        }), 
        __metadata('design:paramtypes', [app_service_1.AppState, core_3.NgZone])
    ], TranslatePipe);
    return TranslatePipe;
})();
exports.TranslatePipe = TranslatePipe;
//# sourceMappingURL=translate-pipe.js.map