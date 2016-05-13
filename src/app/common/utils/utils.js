var config_1 = require('../config');
var fetch = require('isomorphic-fetch');
var cache = {};
function getTranslations(locale) {
    var url = config_1.getLocalUrl('translations') + "\\" + locale + ".json";
    if (!cache[url]) {
        cache[url] = fetch(url).then(function (response) { return response.json(); });
    }
    return (cache[url]);
}
exports.getTranslations = getTranslations;
//# sourceMappingURL=utils.js.map