(function (angular) {
  'use strict'

  angular
    .module('helloSolarSystem')
    .controller('peopleController', peopleController)

    peopleController.$inject = []

    function peopleController() {
      var vm = this
      vm.$onInit = _onInit
      vm.$postLink = _postLink

      function _onInit () { }
      function _postLink () {}
    }

})(window.angular)
