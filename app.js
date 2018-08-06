var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use('/style', express.static('style'));

app.get('/', function(req,res){
  res.render('index');
});

app.get('/who', function(req,res){
  res.render('who');
});

app.get('/skills', function(req,res){
  res.render('skills');
});

app.listen(3000);
