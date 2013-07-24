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
				  '<h3 ng-click="toggleContent()" > first row is: {{attrfoo}} second row is: {{attrbar}} </h3>' +
				  '<div ng-click="myFunc()" ng-show="isContentVisible" ng-transclude> </div>' +  // content is transcluded in before the closing '</div>' tag
				  '</div>',

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