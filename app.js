//jshint esversion:6

//++++++++++++++++++++++++++++++++++++++++++++
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');  //with this we will have the access to all the utilities in theis library
 
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', function (req, res){

  res.render('home', {startingContent : homeStartingContent});

});

// about page
app.get('/about', function (req, res){
  res.send('i said alread nothing serious');
} );


//contuct us
app.get('/contact', function (req, res){
  res.send('Hey its nothing serious');
} );



app.listen(3000, function() {
  console.log("Server started on port blog");
});




