angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  // Aqui dependiendo de una url cargo un componente o una vista

  $stateProvider
    .state('app', {
      url: '/',
      templateUrl: 'app/containers/buscar.html'
    }).state('letra', {
      url: '/:artist/:title',
      component: 'letra'
    });
}
