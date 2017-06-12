(function (angular) {
  'use strict'

  angular
    .module('helloGalaxy')
    .controller('helloController', helloController)

    helloController.$inject = []

    function helloController() {
      var vm = this
      vm.$onInit = _onInit
      vm.$postLink = _postLink

      function _onInit () {
        vm.greeting = 'hello'
      }
      function _postLink () {
        vm.toggleGreeting = _toggleGreeting
      }

      function _toggleGreeting() {
        vm.greeting = (vm.greeting == 'hello') ? 'whats up' : 'hello'
      }

    }

})(window.angular)
