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
var translate_pipe_1 = require("../common/directives/translate-pipe");
var auto_collapse_directive_1 = require("./directives/auto-collapse.directive");
var paragraph_transform_pipe_1 = require("./pipes/paragraph-transform.pipe");
var About = (function () {
    function About() {
    }
    About = __decorate([
        core_1.Component({
            selector: 'about',
            styles: [require('./about.scss')],
            template: require('./about.html'),
            pipes: [translate_pipe_1.TranslatePipe, paragraph_transform_pipe_1.ParagraphTransform],
            directives: [auto_collapse_directive_1.AutoCollapse]
        }), 
        __metadata('design:paramtypes', [])
    ], About);
    return About;
})();
exports.About = About;
//# sourceMappingURL=about.component.js.map