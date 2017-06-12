(function(angular) {
  'use strict';
  angular
    .module('helloGalaxy')
    .service('peopleService', peopleService)

    peopleService.$inject = ['$http', '$q']

    function peopleService($http, $q) {
      var peoples = []
      function _getPersons() {
        peoples = []
        var deferred = $q.defer();
        $http.get('../peoples.json')
          .then(function (data) {
            deferred.resolve(data.data);
            peoples = data.data
          })

        return deferred.promise;
      }

      function _getPerson(personId) {
        return peoples.filter(function (item) {
          return item.id.value === personId
        })[0]
      }

      return {
        getPersons: _getPersons,
        getPerson: _getPerson
      }
    }

}(window.angular));
