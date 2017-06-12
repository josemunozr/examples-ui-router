(function (angular) {
  'use strict'

  angular
    .module('helloGalaxy')
    .component('hello', {
      templateUrl : './hello/hello.tpl.html',
      controller : 'helloController',
      controllerAs : '$ctrl',
      bindings : {}
    })

})(window.angular)
