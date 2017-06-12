(function (angular) {
  'use strict'

  angular
    .module('helloSolarSystem')
    .component('person', {
      templateUrl : './person/person.tpl.html',
      controller : 'personController',
      controllerAs : '$ctrl',
      bindings : {
        person: '<'
      }
    })

})(window.angular)
