var express = require('express')
var app = express()
var rest = require('restler');

app.get('/', function (req, res) {
	var options = {
		'username':'',
		'password':'',
		'headers': {'Content-type': 'application/json', 'Accept': 'application/json'}
	}
  rest.get('https://neworbit.tpondemand.com/api/v1/Context/',options).on('complete', function(data) {
	res.json(data);
});
})



app.listen(56012)