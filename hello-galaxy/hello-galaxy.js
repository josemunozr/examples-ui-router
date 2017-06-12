(function(angular) {
  'use strict';
  angular.module('helloGalaxy',['ui.router'])
  .config(function ($stateProvider) {
    $stateProvider
      .state('hello', {
        url: '/hello',
        component: 'hello'
      })
      .state('people', {
        url: '/people',
        component: 'people',
        resolve: {
          peoples: function (peopleService) {
            return peopleService.getPersons()
          }
        }
      })
      .state('people.person', {
        url: '/{personId}',
        component: 'person',
        resolve : {
          person: function (peoples, $stateParams) {
            return peoples.filter(function (item) {
              return item.id.value === $stateParams.personId
            })[0]
          }
        }
      })

  })
}(window.angular));
