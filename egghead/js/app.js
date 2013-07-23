// Define an App
var app = angular.module('drinkApp', []);

app.controller('AppCtrl', function($scope) {
	$scope.ctrlFlavor = 'blackberry';
});

app.directive('drink', function() {
	return {
		scope: {
			flavor: '='		// Not expecting a string like '@'. Expecting an object. 'This' is set to 'that'.
		},
		template: '<input type="text" ng-model="flavor">'
	};
});