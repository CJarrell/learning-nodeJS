/*const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err, html) => {
	if(err){
		throw err;
	} 

	const server = http.createServer((req, res) => {
		res.statusCode = 200;
		res.setHeader('Content-type', 'text/html');
		res.write(html);
		res.end();
	});

	server.listen(port, hostname, () => {
		console.log('Server started on port '+port);
	});
});
*/
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/*var logger = function(req, res, next){
	console.log('Logging...');
	next();
}

app.use(logger);*/

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
	res.send('Hello World');
});

app.listen(3000, function(){
	console.log('Server started on port 3G');
});