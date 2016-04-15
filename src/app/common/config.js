var serverRoutes = {
    translations: '/assets/data/translations',
    images: 'assets/img'
};
function getLocalUrl(routename) {
    return serverRoutes[routename];
}
exports.getLocalUrl = getLocalUrl;
//# sourceMappingURL=config.js.map