var mongoose = require('mongoose');

var beerSchema = mongoose.Schema({

	name : {type : String},
	flavors : {type : Array},
	strength : {type : String},
	slug : {type : String}
});

var beerModel = mongoose.model('Beer', beerSchema)

var brewerySchema = mongoose.Schema ({

	name : {type : String},
	location : {type : String},
	address : {type : String},
	website : {type : String},
	specialties : {type : Array},
	beersss : {type : Array},
	slug : {type : String},
	taplist : {type : String}
})
var breweryModel = mongoose.model('Brewery', brewerySchema)

var citySchema = mongoose.Schema({
	name : {type : String}
})
var cityModel = mongoose.model('City', citySchema)



module.exports = {
	beerModel : beerModel,
	breweryModel : breweryModel,
	cityModel : cityModel
}

