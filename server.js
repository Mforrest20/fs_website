var express = require('express');
var exphbs  = require('express-handlebars');

var htmlrouter = require('./controller/html-router');

var app = express();


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/', htmlrouter);

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
   console.log("\nSERVER RUNNING ON PORT " + PORT); 
});