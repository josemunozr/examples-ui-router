(function(angular) {
  'use strict';
  angular.module('helloSolarSystem',['ui.router'])
  .config(function ($stateProvider) {
    var peoples = []
    var helloGalaxy = {
      name : 'hello',
      url: '/hello',
      component: 'hello'
    }
    var people = {
      name : 'people',
      url: '/people',
      component: 'people',
      resolve: {
        peoples: function (peopleService) {
          return peopleService.getPersons()
        }
      }
    }
    var person = {
      name : 'person',
      url: '/people/{personId}',
      component: 'person',
      resolve : {
        person: function (peopleService, $transition$) {
          return peopleService.getPerson($transition$.params().personId)
        }
      }
    }

    $stateProvider.state(helloGalaxy)
    $stateProvider.state(people)
    $stateProvider.state(person)
  })
}(window.angular));
