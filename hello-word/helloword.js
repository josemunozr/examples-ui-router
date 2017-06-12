(function() {
  'use strict';
  angular.module('helloWord',['ui.router'])
    .config(function ($stateProvider) {
      var helloState = {
        name: 'hello',
        url: '/hello',
        template: '<h1>hello world!</h1>'
      }
      var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h1>This is an examples Ui-router</h1>'
      }

      $stateProvider.state(helloState)
      $stateProvider.state(aboutState)
    })
    .controller('helloWordController', helloWordController)

    helloWordController.$inject = []

    function helloWordController() {
      var vm = this
    }
}());
