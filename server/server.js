// import path and express library
const path = require('path');
const express = require('express');
// create path to public folder
const publicPath = path.join(__dirname, '/../public');
//set up port number for local and heroku
var port = process.env.PORT || 3000;
//creat express app
var app = express();
//assign public path to express
app.use(express.static(publicPath));
//render index.html for root directory call
app.get('/', (req, res, ) => {
    res.render('index.html');
    
});
//start listening on port
app.listen(port, () => {
    console.log(`Server Started at ${port}`);
});