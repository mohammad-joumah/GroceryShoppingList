// express
const express = require('express');
const app = express();

// handlebars
const hbs = require('hbs');
// View Engine Setups(TEMPLATE ENGINE SETUP)
app.set('view engine', 'hbs');

// bodyParser
const bodyParser = require('body-parser');
// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }));

// dotenv
const dotenv = require('dotenv');
dotenv.config();

// mongoose
const mongoose = require('mongoose');

DB_LINK=process.env.DB_LINK
// setup mongoose
mongoose.connect(DB_LINK, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false  })
    .then(() => {
        console.log('Your MongoDB is connected......')
    })
    .catch(err => console.log('Your ERROR is : ' + err));


// setup static folder for external files
app.use(express.static(__dirname + '/public'));

// routs
// creating routs
const indexRouter = require('./routes/index');
// routes
app.use('/', indexRouter)


// listen part
app.listen(5000, () => {
    console.log('Server is running.....')
})