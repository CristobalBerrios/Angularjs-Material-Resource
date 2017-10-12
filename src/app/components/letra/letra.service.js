(function () {
  'use strict';

  angular
  .module('app')
  .service('letraService', letraService);

  letraService.$inject = ['$resource'];

  // Retorno el objeto $resource instanciado en un endopint de una api

  function letraService($resource) {
    return $resource('https://api.lyrics.ovh/v1/:artist/:title', {artist: '@artist', title: '@title'});
  }
})();
