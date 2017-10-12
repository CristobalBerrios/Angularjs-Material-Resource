(function () {
  'use strict';

  angular
  .module('app')
  .component('letra', {
    templateUrl: 'app/components/letra/letra.html',
    controller: letraCtrl,
    controllerAs: 'vm'
  });

  letraCtrl.$inject = ['$stateParams', 'letraService'];

  function letraCtrl($stateParams, letraService) {
    var vm = this;

    // Con el $stateParams rescato valores de la url

    vm.artist = $stateParams.artist;
    vm.title = $stateParams.title;
    vm.letra = null;

    // Consumo el servicio mediante get, y obtengo la respuesta en la funcion then()

    letraService.get({artist: vm.artist, title: vm.title}).$promise.then(function (data) {
      vm.letra = data.lyrics;
    });
  }
})();
