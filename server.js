const express = require('express');
const exphbs  = require('express-handlebars');
const popper = require('popper.js');
const jq = require('jquery');
//const bootstrap = require('bootstrap');


var htmlrouter = require('./controller/html-router');

var app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', htmlrouter);

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
   console.log("\nSERVER RUNNING ON PORT " + PORT); 
});