(function (angular) {
  'use strict'

  angular
    .module('helloGalaxy')
    .component('person', {
      templateUrl : './person/person.tpl.html',
      controller : 'personController',
      controllerAs : '$ctrl',
      bindings : {
        person: '<'
      }
    })

})(window.angular)
