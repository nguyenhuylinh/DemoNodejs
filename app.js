var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var fs= require("fs");
//var mysql= require("mysql");
server.listen(process.env.PORT || 3000);

//var randomString = require('random-string');

app.get("/", function(req, res){
	res.sendFile(__dirname + "/index.html");
	//var url = require('url');
	//var url_parts = url.parse(req.url, true);
	//var query = url_parts.query;
	//console.log(query);
	
});

/*
//Thiet lap ket noi mysql
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : '12345',
	database : 'tdmu',
	port : 3306
});
connection.connect();
*/

	
io.sockets.on('connection', function (socket){
	
	console.log("Co nguoi connect ne");
	
	
	//Ngat ket noi
	socket.on('disconnect', function(data){
		console.log('da thoat');
		
	});
	
});


