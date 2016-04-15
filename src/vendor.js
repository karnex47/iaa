// For vendors for example jQuery, Lodash, angular2-jwt just import them here unless you plan on
// chunking vendors files for async loading. You would need to import the async loaded vendors
// at the entry point of the async loaded file. Also see custom-typings.d.ts as you also need to
// run `typings install x` where `x` is your module
// Angular 2
require('angular2/platform/browser');
require('angular2/platform/common_dom');
require('angular2/core');
require('angular2/common');
require('angular2/http');
require('angular2/router');
// RxJS
require('rxjs/add/operator/map');
require('rxjs/add/operator/mergeMap');
// Angular 2 Material 2
// TODO(gdi2290): uncomment when material is fixed
// import '@angular2-material/sidenav';
// import '@angular2-material/toolbar';
// import '@angular2-material/button';
// import '@angular2-material/checkbox';
// import '@angular2-material/radio';
// import '@angular2-material/progress-circle';
// import '@angular2-material/card';
// look in platform/directives and platform/providers
if ('production' === ENV) {
}
else {
}
//# sourceMappingURL=vendor.js.map