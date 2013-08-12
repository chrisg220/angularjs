// Define an App
var app = angular.module('app', []);

// Declaring dependencies before function() protects against minification variable collision.
// Dependencies are injected in the same order they are declared.
app.controller('MyCtrl', ['$scope', '$http', function(a, b) {
  console.log(b);
}]);

app.directive('myDirective', function($http, $parse) {
  return {
    link: function(scope, elem, attrs) {
      console.log(scope)
    }
  };
});


