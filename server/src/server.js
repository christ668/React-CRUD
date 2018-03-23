// const express = require('express');

// const app = express();

// app.get('/api/employees', (err, res) => {
//     //Emploe
// })

// app.listen(5000, err => {
//     if (err) console.log('error', err);
    
//     console.log('Running on port 5000');
// });

var express = require('express');
var bodyParser = require('body-parser');
var cors =require('cors');
// create express app
var app = express();


app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Configuring the database
var dbConfig = require('./config/config.js');
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
   // useMongoClient: true
});

mongoose.connection.on('error', function() {
    console.log('Could not connect to the database. Exiting now...');
    process.exit();
});

mongoose.connection.once('open', function() {
    console.log("Successfully connected to the database");
})

require('./Routes/employeeRoute.js')(app);

// define a simple route
app.get('/', function(req, res){
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

// listen for requests
app.listen(5000, function(){
    console.log("Server is listening on port 5000");
});