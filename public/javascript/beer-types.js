angular.module('beerApp', ['ui.bootstrap', 'ngRoute'])



angular.module('beerApp')
	.service('beerService', ['$http', function($http){

		this.getBeers = function(cb){
			$http.get('/api/beers')
				.then(function(returnData){
					cb(returnData.data)
				})
		}
		this.getBreweries = function(cb){
			$http.get('/api/breweries')
				.then(function(returnData){
					cb(returnData.data)
				})
		}
		this.getCities = function(cb){
			$http.get('/api/cities')
				.then(function(returnData){
					cb(returnData.data)
				})
		}
	}])




angular.module('beerApp')
	.controller('beerFinderController', ['$scope', '$http','beerService', function($scope, $http, beerService){
		console.log(beerService)
		
		beerService.getBeers(function(beers){
			$scope.beers = beers
		})
		beerService.getBreweries(function(breweries){
			$scope.breweries = breweries
		})
		beerService.getCities(function(cities){
			$scope.cities = cities
		})

		$scope.showMe = false

		$scope.clickedMe = function(){
			$scope.showMe = true

		}
	// 

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

angular.module('beerApp')
.controller('beerTypeController', ['$scope', '$http', '$routeParams', 'beerService', function($scope, $http, $routeParams, beerService){
	
	beerService.getBeers(function(beers){
		$scope.beers = beers
	})
	beerService.getBreweries(function(breweries){
		$scope.breweries = breweries
	})
	
	var breweryName = window.location.pathname.split('/')[2]
		$http.get('/api/brews/'+ breweryName)
			.then(function(returnData){
			 	console.log(returnData.data)
			$scope.brewery = returnData.data
			})
	

		

	

	$scope.criteriaMatch = function(beerType){
		return function( brewery ){
			
		var isMatch = false;
		brewery.beersss.forEach(function(brewBeers){
			if (brewBeers.name === beerType){
				isMatch = true
			}

		})

		return isMatch
	}
}
}])

angular.module('beerApp')
.controller('breweryController', ['$scope', 'beerService', function($scope, beerService){

	
	beerService.getBreweries(function(breweries){
		$scope.breweries = breweries
	})

}])


			

	






		


