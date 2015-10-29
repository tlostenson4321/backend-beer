


angular.module('beerApp')
.controller('breweryController', ['$scope', 'beerFactory', function($scope, breweryFactory){

	
	$scope.breweries = breweryFactory.breweryList
	$scope.rate = 7;
  	$scope.max = 10;
  	$scope.isReadonly = false;

  $scope.hoveringOver = function(value) {
    $scope.overStar = value;
  };
}])

// var BeerFinder = function(name, flavor)

// Need a for loop for each beer flavor. Will pull beers for beerArray that have that flavor listed.


