


angular.module('beerApp')
	.controller('beerFinderController', ['$scope', '$http', 'beerFactory', 'cityFactory', function($scope, $http, beerFactory, cityFactory){
		$scope.beers = beerFactory.beerList
		$scope.breweries = beerFactory.breweryList
		$scope.cities = cityFactory.cityArray


		$scope.criteriaMatch = function(beerType, city){
		return function( brewery ){
			
		var isMatch = false;
		if (beerType && city){
			brewery.beersss.forEach(function(brewBeers){
				
				if (brewBeers.name === beerType.name && brewery.location === city.name){
					isMatch = true
				}

			})
		}

		return isMatch
	}
}



}])


// $http.get('api/beers')
// 	.then(function(res){
// 		$scope.beers = response.data
// 	})
