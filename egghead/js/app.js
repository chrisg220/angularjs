// Define an App
var app = angular.module('phoneApp', []);

app.controller('AppCtrl', function($scope) {
	this.sayHi = function() {			// assign 'sayHi' to controller itself
		alert('Hello There!');
	}

	return $scope.AppCtrl = this; 		// assign 'AppCtrl' property on '$scope' to 'this'. Return reference.
});

