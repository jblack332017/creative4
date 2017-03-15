var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/number',function(req,res,next){
	console.log("In word route");
	var myurl = "https://api.nal.usda.gov/ndb/reports/?ndbno=" + req.query.n +"&type=b&format=json&api_key=6AyxbkhNDgZD218zKIDnJHU7ypgPw36WLslecK9W"
var request = require('request');
	// request module is used to process the yql url and return the results in JSON format
request(myurl, function(err, resp, body) {
 body = JSON.parse(body);
 console.log(body);
 res.send(body);
});

});


router.get('/word',function(req,res,next){
	console.log("In word route");
	var url = "https://api.nal.usda.gov/ndb/search/?format=json&q="+ req.query.w +"&sort=n&max=25&offset=0&api_key=6AyxbkhNDgZD218zKIDnJHU7ypgPw36WLslecK9W";
var request = require('request');
	// request module is used to process the yql url and return the results in JSON format
request(url, function(err, resp, body) {
 body = JSON.parse(body);
 console.log(body);
 res.send(body);
});

});



module.exports = router;
