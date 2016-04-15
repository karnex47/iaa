const serverRoutes = {
  translations: '/assets/data/translations',
  images: 'assets/img'
};

export function getLocalUrl(routename) {
  return serverRoutes[routename]
}
