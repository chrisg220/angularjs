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
    template: '<div>' +
                '<h3 ng-click="toggleContent()"> First input is: {{attrfoo}} </h3><br/>' +
                  'Second input is: {{attrbar}} <br/>' +
                '<div ng-click="myFunc()" ng-show="isContentVisible" ng-transclude> </div>' +
              '</div>',

    link: function(scope) {
      scope.isContentVisible = false;

      scope.toggleContent = function() {
        scope.isContentVisible = !scope.isContentVisible;
        console.log('toggleContent Fired');
      };

      scope.myFunc = function() {
        console.log('myfunct Fired')
      };
    }
  };
});
