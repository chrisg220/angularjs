// Define an App
var app = angular.module('behaviorApp', []);

app.directive('enter', function() {		// can place 'enter' within an HTML element
  return function(scope, element) {
    element.bind('mouseenter', function() {
      console.log('I am inside of you!');
    });
  };
});

app.directive('leave', function() {		// can place 'leave' within an HTML element
  return function(scope, element) {
    element.bind('mouseleave', function() {
      console.log('I am leaving on a jet plane');
    });
  };
});