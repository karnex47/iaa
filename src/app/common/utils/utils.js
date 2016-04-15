var config_1 = require('../config');
var fetch = require('isomorphic-fetch');
function getTranslations(locale) {
    var url = config_1.getLocalUrl('translations');
    return fetch(url + "\\" + locale + ".json").then(function (response) { return response.json(); });
}
exports.getTranslations = getTranslations;
//# sourceMappingURL=utils.js.map