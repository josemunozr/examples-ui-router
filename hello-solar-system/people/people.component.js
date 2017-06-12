(function (angular) {
  'use strict'

  angular
    .module('helloSolarSystem')
    .component('people', {
      templateUrl : './people/people.tpl.html',
      controller : 'peopleController',
      controllerAs : '$ctrl',
      bindings : {
        peoples: '<'
      }
    })

})(window.angular)
