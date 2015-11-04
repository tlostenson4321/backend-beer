// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var DB = require('./models/beermodels');
var session = require('express-session')

var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/backend-beer')


// Create Express App Object \\
var app = express();



// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
	console.log(res.sendFile)
	
  res.sendFile('/html/index.html', {root: './public'})
});

app.get('/home2', function(req, res){
	res.sendFile('/html/index2.html', {root : './public'})
})
app.get('/beer-types', function(req, res){
	res.sendFile('/html/beer-types.html', {root: './public'})
})
app.get('/breweries', function(req, res){
	res.sendFile('/html/breweries.html', {root: './public'})
})

app.get('/brews/:name', function(req,res){
	res.sendFile('/html/brews.html', {root: './public'})
})


app.get('/api/beers', function(req, res){
	DB.beerModel.find({}, function(err, docs){
		
		res.send(docs)
		
	})
})
app.get('/api/breweries', function(req, res){
	DB.breweryModel.find({}, function(err, docs){

		res.send(docs)
	})
})
app.get('/api/brews/:breweryName', function(req, res){
	console.log(req.params	)
	DB.breweryModel.findOne({name : req.params.breweryName}, function(err, docs){
		// console.log(docs)
		res.send(docs)
	})
})
app.get('/api/cities', function(req, res){
	DB.cityModel.find({}, function(err, docs){
		
		res.send(docs)
	})
})
// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})