
/*
 * GET home page.
 */

var mysql = require('mysql');
config = require('./config'),

exports.index = function(req, res){

	var connection = mysql.createConnection({
	  host     : config.dbConfig.host,
	  user     : config.dbConfig.user,
	  password : config.dbConfig.pass,
	  database : config.dbConfig.dbName
	});


	// connection.connect(function (error, connect) {
	// 	console.log('Here ', error, connect);
	// });

	return res.render('index');
	// res.render('report', {
 //       title : 'My report'
	//    layout : 'mylayout'
	// });
};

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};