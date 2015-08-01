var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

//var addlink = require('./addLink')

app.use(bodyParser.urlencoded({ //Why
  extended: true
}));

//var notes = ["google","yahoo", "microsoft"];

app.use(express.static(path.join(__dirname, 'public')));//Second Argument is the folder to be made public
app.set('views', path.join(__dirname,'templates')); // This is for jade template engine
app.set('view engine', 'jade');

app.get("/",function(req, res){
  res.render('newindex', title="Quicksand");
  // res.sendFile('index.html');
  //res.end("Hello World!");
});

app.get("/newpost", function(req, res){
  res.render('newpost', title="");
})

app.listen(8000, function(){
  console.log("Page served")
});
