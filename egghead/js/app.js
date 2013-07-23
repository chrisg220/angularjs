// Define an App
var app = angular.module('behaviorApp', []);

app.directive('enter', function() {		// can place 'enter' within an HTML element
  return function(scope, element, attrs) {
    element.bind('mouseenter', function() {
      element.addClass(attrs.enter);	// '.addClass' is part of the jqueryLite version. 'attrs.enter' looks at the 'enter' attribute in the element
    });
  };
});

app.directive('leave', function() {		// can place 'leave' within an HTML element
  return function(scope, element, attrs) {
    element.bind('mouseleave', function() {
      element.removeClass(attrs.enter);
    });
  };
});