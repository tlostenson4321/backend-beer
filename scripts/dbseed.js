var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/backend-beer')

var DB = require('../models/beermodels')

// node scripts/dbseed.js

var amber = new DB.beerModel ({
	name : 'Amber',
	flavors : ['Malty/Rich', 'Hoppy'],
	strength : 'Medium',
	slug : 'amber',
})
amber.save(function(err, doc){
	console.log(err)
})
var brown = new DB.beerModel ({
	name : 'Brown',
	flavors : ['Malty/Rich'],
	strength : 'Medium',
	slug : 'brown',
})
brown.save(function(err, doc){
	console.log(err)
	
})
var fruit = new DB.beerModel ({
	name : 'Fruit',
	flavor : ['Fruity'],
	strength : 'Light',
	slug : 'fruit',
})
fruit.save(function(err, doc){
	console.log(err)
	
})
var ipa = new DB.beerModel ({
	name : 'IPA',
	flavors : ['Hoppy', 'Crisp'],
	strength : 'Strong',
	slug : 'ipa',
})
ipa.save(function(err, doc){
	console.log(err)
	
})
var paleAle = new DB.beerModel ({
	name : 'Pale Ale',
	flavors : ['Hoppy', 'Crisp', 'Fruity', 'Balanced'],
	strength : 'Medium',
	slug : 'paleale',
})
paleAle.save(function(err, doc){
	console.log(err)
	
})
var pilsner = new DB.beerModel ({
	name : 'Pilsner',
	flavors : ['Hoppy', 'Crisp'],
	strength : 'Medium',
	slug : 'pilsner'
})
pilsner.save(function(err, doc){
	console.log(err)
	
})
var porter = new DB.beerModel ({
	name : 'Porter',
	flavors : ['Malty/Rich', 'Heavy'],
	strength : 'Strong',
	slug : 'porter'
})
porter.save(function(err, doc){
	console.log(err)
	
})
var saison = new DB.beerModel ({
	name : 'Saison',
	flavors : ['Crisp', 'Fruity'],
	strength : 'Strong',
	slug : 'saison'
})
saison.save(function(err, doc){
	console.log(err)
	
})
var sour = new DB.beerModel ({
	name : 'Sour',
	flavors : ['Sour', 'Fruity'],
	strength : 'Strong',
	slug : 'sour'
})
sour.save(function(err, doc){
	console.log(err)
	
})
var stout = new DB.beerModel ({
	name : 'Stout',
	flavors : ['Malty/Rich', 'Heavy'],
	strength : 'Strong',
	slug : 'stout'
})
stout.save(function(err, doc){
	console.log(err)
	
})
var wheat = new DB.beerModel ({
	name : 'Wheat',
	flavors : ['Crisp', 'Fruity'],
	strength : 'Light',
	slug : 'wheat'
})
wheat.save(function(err, doc){
	console.log(err)
	
})



var avery = DB.breweryModel ({
	name : 'Avery',
	location : 'Boulder',
	address : '4910 Nautilus Ct.',
	website : 'http://averybrewing.com',
	specialties : ['Strongly flavored Ales', 'High ABV', 'Using lots of hops, malt, AND FLAVOR'],
	beersss : [ ipa, wheat, brown, stout, pilsner, porter, amber],
	slug : 'avery',
	taplist : 'http://averybrewing.com/taproom/'
})
avery.save(function(err, doc){
	console.log(err)
	
})
var leftHand = DB.breweryModel ({
	name : 'Left Hand Brewery',
	location : 'Longmont',
	address : '1265 boston Ave',
	website : 'http://lefthandbrewing.com',
	specialties : ['Awesome labels', 'Seasonal Beers', 'Nitro'],
	beersss : [ipa, stout, paleAle, pilsner, porter],
	slug : 'lefthand',
	taplist : 'http://lefthandbrewing.com/beers/'
})
leftHand.save(function(err, doc){
	console.log(err)
	
})
var boulderBeer = DB.breweryModel ({
	name : 'Boulder Beer',
	location : 'Boulder',
	address : '2880 Wilderness Pl.',
	website : 'http://boulderbeer.com',
	specialties : ["Colorado's first craft brewery", 'Barrel Aged Beers', 'Big Flavors'],
	beersss : [ipa, porter, wheat, amber, paleAle, saison],
	slug : 'boulderbeer',
	taplist : 'http://boulderbeer.com/beers/'
})
boulderBeer.save(function(err, doc){
	console.log(err)
	
})
var fate = DB.breweryModel ({
	name : 'FATE Brewing Company',
	location : 'Boulder',
	address : '1600 38th St.',
	website : 'http://fatebrewingcompany.com',
	specialties : ['Creating something different', 'Adding unexpected flavors'],
	beersss : [ipa, stout, wheat, pilsner],
	slug : 'fate',
	taplist : 'http://fatebrewingcompany.com/beer/'
})
fate.save(function(err, doc){
	console.log(err)
	
})
var twistedPine = DB.breweryModel ({
	name : 'Twisted Pine Brewing',
	location : 'Boulder',
	address : '3201 Walnut St.',
	website : 'http://twistedpinebrewing.com',
	specialties : ['High quality products', 'Experimentation'],
	beersss : [ipa, paleAle, saison, wheat, stout],
	slug : 'twisted',
	taplist : 'http://twistedpinebrewing.com/brewery/#our-flagship-beers'
})
twistedPine.save(function(err, doc){
	console.log(err)
	
})
var southernSun = DB.breweryModel ({
	name : 'Southern Sun Pub and Brewing',
	location : 'Boulder',
	address : '1535 Pearl St.',
	website : 'http://mountainsunpub.com',
	specialties : ['Hoppy Beers', 'Ales'],
	beersss : [wheat, stout, paleAle, porter, amber, ipa],
	slug : 'southsun',
	taplist : 'http://www.mountainsunpub.com/beerListHouseAles.php'
})
southernSun.save(function(err, doc){
	console.log(err)
	
})
var upslope = DB.breweryModel ({
	name : 'Upslope Brewing Company',
	location : 'Boulder',
	address : '1898 S Flatiron Ct.',
	website : 'http://upslopebrewing.com',
	specialties : ['Beers made in small batches', 'Cool cans'],
	beersss : [paleAle, ipa, brown, sour, stout],
	slug : 'upslope',
	taplist : 'http://upslopebrewing.com/beer/'
})
upslope.save(function(err, doc){
	console.log(err)
	
})
var asher = DB.breweryModel ({
	name : 'Asher Brewing Company',
	location : 'Boulder',
	address : '4699 Nautilus Ct.',
	website : 'http://asherbrewing.com',
	specialties : ["Colorado's First all Organic Brewery", 'Run on 100% wind power'],
	beersss : [ipa, amber, wheat],
	slug : 'asher',
	taplist : 'http://asherbrewing.com/organic-beer/'
})
asher.save(function(err, doc){
	console.log(err)
	
})
var sanitas = DB.breweryModel ({
	name : 'Sanitas Brewing Company',
	location : 'Boulder',
	address : '3550 Frontier Ave.',
	website : 'http://sanitasbreweing.com',
	specialties : ['Quirky beers', 'Lots of fruit, hops, and coffee'],
	beersss : [ipa, sour, brown, amber, stout, fruit],
	slug : 'sanitas',
	taplist : 'http://www.sanitasbrewing.com/#!page2/cjg9'
})
sanitas.save(function(err, doc){
	console.log(err)
	
})
var wildWoods = DB.breweryModel ({
	name : 'Wild Woods Brewery',
	location : 'Boulder',
	address : '5460 Conestoga Ct.',
	website : 'http://wildwoodsbrewery.com',
	specialties : ['Beers based on outdoor activities'],
	beersss : [ipa, paleAle, amber, porter, stout, wheat, fruit],
	slug : 'wildwoods',
	taplist : 'http://www.wildwoodsbrewery.com/#!beer/cigc'
})
wildWoods.save(function(err, doc){
	console.log(err)
	
})
var westFlanders = DB.breweryModel ({
	name : 'West Flanders Brewing Company',
	location : 'Boulder',
	address : '1125 Pearl St.',
	website : 'http://wfbrews.com',
	specialties : ['Balanced flavors', 'Crazy stories'],
	beersss : [ipa, paleAle, pilsner, porter, sour],
	slug : 'west',
	taplist : 'http://wfbrews.com/'
})
westFlanders.save(function(err, doc){
	console.log(err)
	
})
var finkleGarf = DB.breweryModel ({
	name : 'Finkel and Garf',
	location : 'Boulder',
	address : '5455 Spine Rd.',
	website : 'http://finkelandgarf.com',
	specialties : ['Flavorful beers', 'Still kids at heart'],
	beersss : [stout, ipa, amber, wheat, fruit, sour],
	slug : 'finkel',
	taplist : 'http://finkelandgarf.com/'
})
finkleGarf.save(function(err, doc){
	console.log(err)
	
})
var vindication = DB.breweryModel ({
	name : 'Vindication Brewing Company',
	location : 'Boulder',
	address : '6880 Winchester Cir.',
	website : 'http://vindicationbrewing.com',
	specialties : ['Attention to Deatail', 'Specialty equipment', 'Mixtures of flavors'],
	beersss : [ipa, amber, fruit, wheat, stout],
	slug : 'vindication',
	taplist : 'http://vindicationbrewing.com/beers/'
})
vindication.save(function(err, doc){
	console.log(err)
	
})
var bootstrap = DB.breweryModel ({
	name : 'Bootstrap Brewing Company',
	location : 'Niwot',
	address : '6778 N 79th St.',
	website : 'http://bootstrapbrewing.com',
	specialties : ['Easy to drink Beers with lots of flavor'],
	beersss : [amber, paleAle, wheat, ipa, brown, stout],
	slug : 'bootstrap',
	taplist : 'http://www.bootstrapbrewing.com/BEER.html'
})
bootstrap.save(function(err, doc){
	console.log(err)
	
})
var powderKeg = DB.breweryModel ({
	name : 'Powder Keg Brewing Co.',
	location : 'Niwot',
	address : '101 2nd Ave.',
	website : 'http://powderkepbrewingcompany.com',
	specialties : ['American and Belgian-style Ales'],
	beersss : [stout, paleAle, saison, amber],
	slug : 'powder',
	taplist : 'http://www.powderkegbrewingcompany.com/beers'
})
powderKeg.save(function(err, doc){
	console.log(err)
	
})
var frontRange = DB.breweryModel ({
	name : 'Front Range Brewing Company',
	location : 'Lafayette',
	address : '400 W South Boulder Rd. #1650',
	website : 'http://frontrangebrewingcompany.com',
	specialties : ['Americanizing foreign beer types'],
	beersss : [wheat, pilsner, amber, ipa, stout],
	slug : 'frontrange',
	taplist : 'http://www.frontrangebrewingcompany.com/beers/'
})
frontRange.save(function(err, doc){
	console.log(err)
	
})
var thePost = DB.breweryModel ({
	name : 'The Post Brewing Company',
	location : 'Lafayette',
	address : '105 W Emma St.',
	website : 'http://postbrewing.com',
	specialties : ['Strong flavors', 'Drinkable beers'],
	beersss : [pilsner, paleAle, ipa],
	slug : 'thepost',
	taplist : 'http://www.postbrewing.com/brewery/'
})
thePost.save(function(err, doc){
	console.log(err)
	
})
var twelveDegree = DB.breweryModel ({
	name : '12Degree Brewing',
	location : 'Louisville',
	address : '820 Main St',
	website : 'http://12degree.com',
	specialties : ['Belgian-inspired Artisinal Ales'],
	beersss : [saison, wheat, ipa, amber],
	slug : 'twelve',
	taplist : 'http://www.12degree.com/'
})
twelveDegree.save(function(err, doc){
	console.log(err)
	
})
var fourNoses = DB.breweryModel ({
	name : '4 Noses Brewing Company',
	location : 'Broomfield',
	address : '8855 W 116th Cir. #4',
	website : 'http://4nosesbrewing.com',
	specialties : ['Barrel Aged Beers', 'Fresh Flavors'],
	beersss : [wheat, ipa, porter, paleAle],
	slug : 'fournoses',
	taplist : 'http://4nosesbrewing.com/on-tap'
})
fourNoses.save(function(err, doc){
	console.log(err)
	
})
var odd13 = DB.breweryModel ({
	name : 'Odd13 Brewing',
	location : 'Lafayette',
	address : '301 E Simpson St.',
	website : 'http://odd13brewing.com',
	specialties : ['beers with a story(no really)', 'reduced gluten beers'],
	beersss : [ipa, sour, amber, stout],
	slug : 'odd',
	taplist : 'http://www.odd13brewing.com/content/taplist.html'
})
odd13.save(function(err, doc){
	console.log(err)
	
})
var gravity = DB.breweryModel ({
	name : 'Gravity Brewing Company',
	location : 'Louisville',
	address : '1150 Pine St.',
	website : 'http://thegravitybrewing.com',
	specialties : ['"One pint is worth a thousand words"'],
	beersss : [pilsner, fruit, saison, stout, wheat, ipa, amber],
	slug : 'gravity',
	taplist : 'http://thegravitybrewing.com/beers-on-tap/'
})
gravity.save(function(err, doc){
	console.log(err)
	
})
var wonderland = DB.breweryModel ({
	name : 'Wonderland Brewing Comapny',
	location : 'Broomfield',
	address : '5450 W 120th Ave.',
	website : 'http://wonderlandbrewing.com',
	specialties : ['"Care, Creativity and Time"', 'Beer as therapy'],
	beersss : [wheat, ipa, saison, fruit, porter, amber, stout, paleAle],
	slug : 'wondeland',
	taplist : 'http://wonderlandbrewing.com/beer/'
})
wonderland.save(function(err, doc){
	console.log(err)
	
})
var crystalSprings = DB.breweryModel ({
	name : 'Crystal Springs Brewery',
	location : 'Louisville',
	address : '657 S Taylor Ave.',
	website : 'http://crystalsprinsbrewing.com',
	specialties : ['Small batches', 'Seasonal beers'],
	beersss : [ipa, wheat, paleAle, fruit, porter, amber, stout],
	slug : 'crystal',
	taplist : 'http://crystalspringsbrewing.com/beers/'
})
crystalSprings.save(function(err, doc){
	console.log(err)
	
})
var oskarBlues = DB.breweryModel ({
	name : 'Oskar Blues',
	location : 'Longmont',
	address : '1555 Hover Rd.',
	website : 'http://www.oskarblues.com',
	specialties : ['Hoppy beers', 'Growing off what they have previously done'],
	beersss : [ipa, pilsner, amber, stout],
	slug : 'oskar',
	taplist : 'http://www.oskarblues.com/#mamas'
})
oskarBlues.save(function(err, doc){
	console.log(err)
	
})
var bru = DB.breweryModel ({
	name : 'BRU',
	location : 'Boulder',
	address : '5290 Arapahoe Ave.',
	website : 'http://bruboulder.com',
	specialties : ['Using great ingredients', 'Use wind power'],
	beersss : [brown, ipa, amber, paleAle],
	slug : 'bru',
	taplist : 'http://www.bruboulder.com/bru-handbuilt-beer/'
})
bru.save(function(err, doc){
	console.log(err)
	
})
var newPlanet = DB.breweryModel ({
	name : 'New Planet Brewery',
	location : 'Boulder',
	address : '6560 Odell Place, Unit D',
	website : 'http://www.newplanetbeer.com',
	specialties : ['Only brewery in CO that produces only Gluten Free beers'],
	beersss : [paleAle, wheat, fruit],
	slug : 'newplanet',
	taplist : 'http://www.newplanetbeer.com/tasting-room-information/?ao_confirm'
})
newPlanet.save(function(err, doc){
	console.log(err)
	
})
var shine = DB.breweryModel ({
	name : 'Shine Gathering Place',
	location : 'Boulder',
	address : '2027 13th St.',
	website : 'http://www.shineboulder.com',
	specialties : ['"Every batch is infused with Rose Quartz Essence, a homemade infusion of the energies of compassion, harmony and unconditional love."'],
	beersss : [ipa, paleAle, pilsner, amber, stout],
	slug : 'shine',
	taplist : 'http://www.shineboulder.com/brewery/'
})
shine.save(function(err, doc){
	console.log(err)
	
})
var jWells = DB.breweryModel ({
	name : 'J Wells Brewery',
	location : 'Boulder',
	address : '2516 49th St. #5',
	website : 'http://jwellsbrewery.com',
	specialties : ['Smallest nano brewery in Boulder'],
	beersss : [ipa, stout, amber, brown],
	slug : 'jwells',
	taplist : 'http://jwellsbrewery.com/beers/'
})
jWells.save(function(err, doc){
	console.log(err)
	
})

var boulder = DB.cityModel ({
	name : 'Boulder'
})
boulder.save(function(err, doc){
	console.log(err)
	
})
var broomfield = DB.cityModel ({
	name : 'Broomfield'
})
broomfield.save(function(err, doc){
	console.log(err)
	
})
var lafayette = DB.cityModel ({
	name : 'Lafayette'
})
lafayette.save(function(err, doc){
	console.log(err)
	
})
var longmont = DB.cityModel ({
	name : 'Longmont'
})
longmont.save(function(err, doc){
	console.log(err)
	
})
var louisville = DB.cityModel ({
	name : 'Louisville'
})
louisville.save(function(err, doc){
	console.log(err)
	
})
var niwot = DB.cityModel ({
	name : 'Niwot'
})
niwot.save(function(err, doc){
	console.log(err)
	
})