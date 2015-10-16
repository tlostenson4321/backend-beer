// $(document).on('ready', function() {
  
// });



angular.module('beerApp')
	.controller('beerFinderController', ['$scope', 'beerFactory', 'cityFactory', function($scope, beerFactory, cityFactory){
		$scope.beers = beerFactory.beerList
		$scope.breweries = beerFactory.breweryList
		$scope.cities = cityFactory.cityArray
		$scope.showMe = false

		$scope.clickedMe = function(){
			$scope.showMe = true

		}
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


// if a certain combination is chosen then it will go to the breweries page but only show the specific items that were chosen.

// filters needed are 
// 	if (selectedBeer = Amber){
// 		return breweries | filter brewery.beersss = 'Amber'
// 	}

// 	breweries.forEach( )








// $scope.nope = function(){
// 	if (nope === true) {
// 		return alert("Sorry no can do")
// 	}
// }