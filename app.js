var express = require('express');
var app = express();
var jQuery = require('jquery');

app.set('view engine', 'ejs');

app.use('/style', express.static('style'));

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

function errorHandler (err, req, res, next) {
  if (res.headersSent) {
    return next(err)
  }
  res.status(500)
  res.render('error', { error: err })
}
function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}
function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
}

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
