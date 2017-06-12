(function (angular) {
  'use strict'

  angular
    .module('helloSolarSystem')
    .controller('personController', personController)

    personController.$inject = []

    function personController() {
      var vm = this
      vm.$onInit = _onInit

      function _onInit () {
        
      }
    }

})(window.angular)
