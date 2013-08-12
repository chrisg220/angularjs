// Define an App
var app = angular.module('superApp', []);

app.factory('Data', function($rootScope) {
  var sharedAbilities = [{url:''}, {url:''}, {url:''}, {url:''}];

  return sharedAbilities;
});

app.directive('interstitial', function(Data) {
  return {
    restrict: 'E',
    transclude: true,

    controller: function($scope) {
      $scope.abilities = Data;

      this.updateImage = function(fileReaderUrl, index) {
        console.log('interstitial: this.addFlight:');
        $scope.abilities[index].url = fileReaderUrl;

        console.log('current abilities now are :');
        console.log($scope.abilities);
      }

      this.removeImage = function(index) {
        console.log('interstitial: removeImage:');
        $scope.abilities[index].url = '';

        console.log('current abilities now are :');
        console.log($scope.abilities);
      }

    },
    template: '<span> hello folks </span>',

    link: function(scope, element) {
      element.addClass('button');
      element.bind('mouseenter', function() {
        console.log(scope.abilities);
      })
    }
  }
});

app.directive('updateImage', function() {
  return {
    require: 'interstitial',
    link: function(scope, element, attrs, superheroCtrl) {
      //update image
      var fileReaderUrl = 'www.newurl.com';
      console.log('updateImage: link function:');
      superheroCtrl.updateImage(fileReaderUrl, attrs.imageIndex);
    }
  }
});

app.directive('removeImage', function() {
  return {
    require: 'interstitial',
    link: function(scope, element, attrs, superheroCtrl) {
      console.log('removeImage:');

      element.bind('click', function() {
        superheroCtrl.removeImage(attrs.imageIndex);
        console.log('removeImage: link function:');
        console.log(scope.abilities);
      })
    }
  }
});
