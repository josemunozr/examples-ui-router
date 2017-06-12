(function (angular) {
  'use strict'

  angular
    .module('helloGalaxy')
    .controller('personController', personController)

    personController.$inject = []

    function personController() {
      var vm = this
      vm.$onInit = _onInit

      function _onInit () {

      }
    }

})(window.angular)
