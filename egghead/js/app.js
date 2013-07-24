// Define an App
var app = angular.module('phoneApp', []);

app.controller('AppCtrl', function($scope) {
	$scope.leaveVoicemail = function(number, message) {
		alert("Number: " + number + " said: " + message);
	};
});

app.directive('phone', function() {
	return {
		restrict: 'E',
		scope: {
			number: '@',	// shorthand for reading in an attribute. In this case, 'number' is readin in phone numbers on each input
			network: '=',	// set up two-way binding. Directive is connected to the controller
			makeCall: '&'	// can make a call on the controller scope.
		},
		template: '<div class="panel"> Number: {{number}} Network: <select ng-model="network" ng-options="net for net in networks"></select>' +
			'<input type="text" ng-model="value">' +
			'<div class="button" ng-click="makeCall({number:number, message:value})"> Call home!</div></div>', //{{paramFromHTML:valSentToControllerFunction}}

		link: function(scope) {
			scope.networks = ['Verizon', 'AT&T', 'Sprint'];
			scope.network = scope.networks[0];
		}
	};
});