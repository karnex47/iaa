/*
 * These are globally available directives in any template
 */
var core_1 = require('angular2/core');
// Angular 2 Router
var router_1 = require('angular2/router');
// Angular 2 Material 2
// TODO(gdi2290): replace with @angular2-material/all
var angular2_material2_1 = require('./angular2-material2');
// application_directives: directives that are global through out the application
exports.APPLICATION_DIRECTIVES = router_1.ROUTER_DIRECTIVES.concat(angular2_material2_1.MATERIAL_DIRECTIVES);
exports.DIRECTIVES = [
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: exports.APPLICATION_DIRECTIVES, multi: true })
];
//# sourceMappingURL=directives.js.map