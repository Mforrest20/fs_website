var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home');
});

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){
   console.log("\nSERVER RUNNING ON PORT " + PORT); 
});