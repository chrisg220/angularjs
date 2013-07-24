// Define an App
var app = angular.module('phoneApp', []);

app.controller('AppCtrl', function($scope) {

});

app.directive('panel', function() {
	return {
		restrict: 'E',
		transclude: true,  // Set 'transclude' to 'true' in order to carry content from the DOM into this directive.
		template: '<div class="panel" ng-transclude>This is a panel component</div>'  // DOM elements are transcluded into the element containing 'ng-transclude'
	};
});