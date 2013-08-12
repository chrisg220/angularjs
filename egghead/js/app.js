// Define an App
var app = angular.module('app', []);

app.controller('AppCtrl', function($scope, $q) {

  var defer = $q.defer();

  defer.promise
    .then(function(weapon) {
      alert('You can have my ' + weapon);

      return 'bow';
    })
    .then(function(weapon) {
      alert('And my ' + weapon);

      return 'axe';
    })
    .then(function(weapon) {
      alert('As well as my ' + weapon);
    })

  defer.resolve('sword');

});
