(function (angular) {
  'use strict'

  angular
    .module('helloGalaxy')
    .component('people', {
      templateUrl : './people/people.tpl.html',
      controller : 'peopleController',
      controllerAs : '$ctrl',
      bindings : {
        peoples: '<'
      }
    })

})(window.angular)
