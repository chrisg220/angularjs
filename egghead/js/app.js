// Define an App
var app = angular.module('choreApp', []);

app.controller('ChoreCtrl', function($scope) {
	$scope.logChore = function(chore) {
		alert(chore + " is done!");
	};
});

app.directive('kid', function() {
	return {
		restrict: 'E',
		scope: {  // Pass in an object to limit the scope to the individual kid
			done:'&'  // '&' expression. Binds 'done' to 'logChore(chore)' as set in the HTML. Now when 'done()' is called, it will call 'logChore()'
		},
		template: '<input type="text" ng-model="choreModel">' +
			' {{chore}}' +
			' <div class="button" ng-click="done({chore:choreModel})">I am done</div>' // {{property:value}}
	};
});