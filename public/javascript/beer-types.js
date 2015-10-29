angular.module('beerApp', ['ui.bootstrap'])


// Beer types
angular.module('beerApp')
	.factory('beerFactory', function(){
		var beerList = []
		var breweryList = []
		
			var Beer = function(name, flavors, strength, slug) {
			this.name = name
			this.flavors = flavors
			this.strength = strength
			this.slug = slug

			beerList.push(this)
			}
			var amber = new Beer('Amber', ['Malty/Rich', 'Hoppy'], 'Medium', 'amber')
			var brown = new Beer('Brown', ['Malty/Rich'], 'Medium', 'brown')
			var fruit = new Beer('Fruit', ['Fruity'], 'Medium', 'fruit')
			var ipa = new Beer('I.P.A', ['Hoppy', 'Crisp'], 'Strong', 'ipa')
			var paleAle = new Beer('Pale Ale', ['Hoppy', 'Crisp', 'Fruity', 'Balanced'], 'Medium', 'paleale')
			var pilsner = new Beer('Pilsner', ['Hoppy', 'Crisp'], 'Medium', 'pilsner')
			var porter = new Beer('Porter', ['Malty/Rich', 'Heavy'], 'Strong', 'porter')
			var saison = new Beer('Saison', ['Crisp', 'Fruity'], 'Strong', 'saison')
			var sour = new Beer('Sour', ['Sour', 'Fruity'], 'Strong', 'sour')
			var stout = new Beer('Stout', ['Heavy', 'Malty/Rich'], 'Strong', 'stout')
			var wheat = new Beer('Wheat', ['Crisp', 'Fruity'], 'Light', 'wheat')

		var Brewery = function(name, location, address, website, specialties, beersss){
			// name = string
			// location = string
			// website = string
			// specialties = array
			// beer = array of beers
			this.name = name
			this.location = location
			this.address = address
			this.website = website
			this.specialties = specialties
			this.beersss = beersss

		

			breweryList.push(this)
		}
	



		var avery = new Brewery('Avery Brewing Company', 'Boulder', '4910 Nautilus Ct.', 'http://averybrewing.com', ['strongly flavored Ales', 'lots of hops, malt, AND FLAVOR', 'high ABV'], [ ipa, wheat, brown, stout, pilsner, porter, amber])
		var leftHand = new Brewery('Left Hand Brewery', 'Longmont', '1265 Boston Ave.', 'http://lefthandbrewing.com', ['Awesome labels'], [ipa, stout, paleAle, pilsner, porter])
		var boulderBeer = new Brewery('Boulder Beer', 'Boulder', '2880 Wilderness Pl.', 'http://boulderbeer.com', ["Colorado's first craft brewery", 'Barrel Aged Beers', 'Big Flavors'], [ipa, porter, wheat, amber, paleAle, saison])
		var fate = new Brewery('FATE Brewing Company', 'Boulder', '1600 38th St.', 'http://fatebrewingcompany.com', ['Creating something different'], [ipa, stout, wheat, pilsner])
		var twistedPine = new Brewery('Twisted Pine Brewing', 'Boulder', '3201 Walnut St.', 'http://twistedpinebrewing.com', ['High quality products', 'experimentation'], [ipa, paleAle, saison, wheat, stout])
		var southernSun = new Brewery('Southern Sun Pub and Brewery', 'Boulder', '1535 Pearl St.', 'http://mountainsunpub.com', ['Hoppy Beers', 'Ales'], [wheat, stout, paleAle, porter, amber, ipa])
		var upslope = new Brewery('Uplsope Brewing Company', 'Boulder', '1898 S Flatiron Ct.', 'http://upslopebrewing.com', ['cool cans', 'Beers made in small batches'], [paleAle, ipa, brown, sour, stout])
		var asher = new Brewery('Asher Brewing Comapny', 'Boulder', '4699 Nautilus Ct.', 'http://asherbrewing.com', ["Colorado's First all Organic Brewery"], [ipa, amber, wheat])
		var sanitas = new Brewery('Sanitas Brewing Company', 'Boulder', '3550 Frontier Ave.', 'http://sanitasbreweing.com', ['Quirky beers', 'Lots of fruit, hops, and coffee'], [ipa, sour, brown, amber, stout, fruit])
		var wildWoods = new Brewery('Wild Woods Brewery', 'Boulder', '5460 Conestoga Ct.', 'http://wildwoodsbrewery.com', ['Beers based on outdoor activities'], [ipa, paleAle, amber, porter, stout, wheat, fruit])
		var westFlanders = new Brewery('West Flanders Brewing Company', 'Boulder', '1125 Pearl St.', 'http://wfbrews.com', ['balanced flavors', 'crazy stories'], [ipa, paleAle, pilsner, porter, sour])
		var finkelGarf = new Brewery(' Finkel and Garf', 'Boulder', '5455 Spine Rd.', 'http://finkelandgarf.com', ['flavorful beers', 'Still kids at heart'], [stout, ipa, amber, wheat, fruit, sour] )
		var vindication = new Brewery('Vindication Brewing Company', 'Boulder', '6880 Winchester Cir.', 'http://vindicationbrewing.com', ['Attention to Deatail', 'specialty equipment', 'Mixtures of flavors'], [ipa, amber, fruit, wheat, stout])
		var bootstrap = new Brewery('Bootstrap Brewing Comapny', 'Niwot', '6778 N 79th St.', 'http://bootstrapbrewing.com', ['Easy to drink Beers with lots of flavor'], [amber, paleAle, wheat, ipa, brown, stout] )
		var powderKeg = new Brewery('Powder Keg Brewing Co', 'Niwot', '101 2nd Ave.', 'http://powderkepbrewingcompany.com', ['American and Belgian-style Ales'], [stout, paleAle, saison, amber])
		var frontRange = new Brewery('Front Range Brewing Company', 'Lafayette', '400 W South Boulder Rd. #1650', 'http://frontrangebrewingcompany.com', ['Americanizing foreign beer types'], [wheat, pilsner, amber, ipa, stout])
		var thePost = new Brewery('The Post Brewing Comapny', 'Lafayette', '105 W Emma St.', 'http://postbrewing.com', ['strong flavors', 'drinkable beers'], [pilsner, paleAle, ipa])
		var twelveDegree = new Brewery('12Degree Brewing', 'Louisville', '820 Main St', 'http://12degree.com', ['Belgian-inspired Artisinal Ales'], [saison, wheat, ipa, amber])
		var fourNoses = new Brewery('4 Noses brewing Comapny', 'Broomfield', '8855 W 116th Cir. #4', 'http://4nosesbrewing.com', ['Barrel Aged Beers', 'Fresh Flavors'], [wheat, ipa, porter, paleAle])
		var odd13 = new Brewery('Odd13 Brewing', 'Lafayette', '301 E Simpson St.', 'http://odd13brewing.com', ['beers with a story(no really)', 'reduced gluten beers'], [ipa, sour, amber, stout])
		var gravity = new Brewery('Gravity Brewing Company', 'Louisville', '1150 Pine St.', 'http://thegravitybrewing.com', ['"One pint is worth a thousand words"'], [pilsner, fruit, saison, stout, wheat, ipa, amber])
		var wonderland = new Brewery('Wonderland Brewing Company', 'Broomfield', '5450 W 120th Ave.', 'http://wonderlandbrewing.com', ['"Care, Creativity and Time"', 'beer as therapy'], [wheat, ipa, saison, fruit, porter, amber, stout, paleAle])
		var crystalSprings = new Brewery('Crystal Springs Brewery', 'Louisvile', '657 S Taylor Ave.', 'http://crystalsprinsbrewing.com', ['small batches', 'seasonal beers'], [ipa, wheat, paleAle, fruit, porter, amber, stout])
		var oskarBlues = new Brewery('Oskar Blues', 'Longmont', '1555 Hover Rd.', 'http://www.oskarblues.com', ['Hoppy beers', 'Growing off what they have previously done'], [ipa, pilsner, amber, stout])
		var bru = new Brewery('BRU', 'Boulder', '5290 Arapahoe Ave.', 'http://bruboulder.com', ['using great ingredients', 'use wind power'], [brown, ipa, amber, paleAle])
		var newPlanet= new Brewery('New Planet', 'Boulder', '6560 Odell Place, Unit D', 'http://www.newplanetbeer.com', ['only brewery in CO with all Gluten Free beers'], [paleAle, wheat, fruit])
		var shine = new Brewery('Shine Gathering Place', 'Boulder', '2027 13th St.', 'http://www.shineboulder.com', ['every batch is infused with Rose Quartz Essence, a homemade infusion of the energies of compassion, harmony and unconditional love.'], [ipa, paleAle, pilsner, amber, stout])
		var jwells = new Brewery('J Wells Brewery', 'Boulder', '2516 49th St. #5', 'http://jwellsbrewery.com', ['smallest nano brewery in Boulder'], [ipa, stout, amber, brown])

	
	
		return {
			Beer : Beer,
			beerList : beerList,
			Brewery : Brewery,
			breweryList : breweryList,
		}





})
	


// pictures for card flip
// angular.module('beerApp')
// 	.factory('picFactory', function(){
// 	var picArray = []
// 		var Picture = function(picture) { 
// 		this.picture = picture

// 		picArray.push(this)

// 	}
// 			// var picAmber = new Picture('http://learn.kegerator.com/wp-content/uploads/2013/11/red_amber_ale.jpg') Will work but need to have saved images not links. 

// 		return {
// 			Picture : Picture,
// 			picArray : picArray
// 		}	

// 	})

angular.module('beerApp')
	.factory('cityFactory', function(){
	var cityArray = []
		var City = function(name) {
		this.name = name

		cityArray.push(this)
	}

	var boulder = new City('Boulder')
	var broomfield = new City('Broomfield')
	var lafayette = new City('Lafayette')
	var longmont = new City('Longmont')
	var louisville = new City('Louisville')
	var niwot = new City ('Niwot')

		return {
			City : City,
			cityArray : cityArray
		}

	})





angular.module('beerApp')
.controller('beerTypeController', ['$scope', 'beerFactory', function($scope, beerFactory){
	

	$scope.beers = beerFactory.beerList
	$scope.breweries = beerFactory.breweryList

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



			

	

// $scope.pictures = ['beer-test.jpg', 'beer-test2.jpg']




		


