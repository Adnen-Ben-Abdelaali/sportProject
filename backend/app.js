//import express module
const expressSoccer = require('express');

// import body parser module
const bodyParser = require('body-parser');

//create express application
const app = expressSoccer();

//configuration body-parser  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//import mongoose module
const mongoose = require('mongoose');
//connect App to DB and create my DB :
mongoose.connect('mongodb://localhost:27017/sport', {useNewUrlParser: true, useUnifiedTopology: true});

//security configuration : pour que s'assurer qu'il n'ya pas un 3 ème agent sur la ligne de communication 
app.use
(
  (req, res, next) => 
  { 
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
  }
);








//make app exportable
module.exports = app;


