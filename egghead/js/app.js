// Define an App
var app = angular.module('app', []);

app.directive('dumbPassword', function() {
  var validElement = angular.element('<div>{{model.input}}</div>');

  // Could be expanded for validations
  var link = function(scope, elem) {
    scope.$watch('model.input', function(value) {
      if(value === 'secretword') {
        validElement.toggleClass('button');
        elem.append(validElement);
      }
      else {
        validElement.removeClass('button');
        validElement.remove();
      }
    });
  };

  return {
    restrict: 'E',
    replace: true,
    template: '<div> \n <input type=\"text\" ng-model=\"model.input\"> \n  </div>',

    compile: function(tElem) {
      // Appends angular element onto template upon compilation process.
      // No need to traverse DOM. Reference to element is stored
      // tElem.append(validElement);
      return link;
    }
  };
});


