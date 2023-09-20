const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const app = express();
require('dotenv').config(); 
require('./config/database')



app.use(logger('dev'));
app.use(express.json());


//config both serve-favicon and static middleware
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname,'build'))); 




//API route 
app.use('/api/users', require('./routes/api/users')); 



const port = process.env.port || 3001; 

//catch all
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


//port listening
app.listen(port, function() {
    console.log(`express app ruining on port ${port}`)
})