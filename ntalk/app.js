var express = require('express');
var load = require('express-load');
var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

//load deve acontecer em uma ordem correta de dependencias
load('models').then('controllers').then('routes').into(app);

app.listen(3000, function(){
  console.log("Ntalk no ar.");
});
