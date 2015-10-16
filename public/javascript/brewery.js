


angular.module('beerApp')
.controller('breweryController', ['$scope', 'beerFactory', function($scope, breweryFactory){

	
	$scope.breweries = breweryFactory.breweryList
}])

// var BeerFinder = function(name, flavor)

// Need a for loop for each beer flavor. Will pull beers for beerArray that have that flavor listed.


