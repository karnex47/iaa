function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
// App
var translate_pipe_1 = require("./common/directives/translate-pipe");
__export(require('./app.component'));
__export(require('./app.service'));
var app_service_2 = require('./app.service');
// Application wide providers
exports.APP_PROVIDERS = [
    app_service_2.AppState,
    translate_pipe_1.TranslatePipe
];
//# sourceMappingURL=index.js.map