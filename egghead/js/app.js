// Define an App
var app = angular.module('app', []);

app.directive('zippy', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {
      attrfoo: '@',
      attrbar: '@'
    },
    templateUrl: 'templates/zippy_template.html',

    link: function(scope) {
      scope.isContentVisible = false;

      scope.toggleContent = function() {
        scope.isContentVisible = !scope.isContentVisible;
        console.log('toggleContent Fired');
      };

      scope.myFunc = function() {
        console.log('myfunct Fired');
      };
    }
  };
});
