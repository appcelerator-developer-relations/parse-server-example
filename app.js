var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var AppcLogger = require('appc-logger');

var app = express();
var api = new ParseServer({
	"databaseURI": "<MongoURIHere>",
	"appId": "<AppIdHere>",
	"masterKey": "<MasterKeyHere>"
});

var loggger = AppcLogger.createExpressLogger(app);

// Serve the Parse API at /parse URL prefix
app.use('/parse', api);

// For Arrow's deployment health check
app.get('/arrowPing.json', function (req, res) {
	res.status(200).send({
		success: true
	});
});

var port = process.env.PORT || 1337;
app.listen(port, function() {
	console.log('parse-server-example running on port ' + port + '.');
});
