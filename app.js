var db = require('./models');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

db.sequelize.sync({ force: true })
    // .then(() => {
    //     return db.User.create({
    //         email: "typographylover@yahoo.es",
    //         password: "Aa*12345",
    //         name: "Jorge",
    //         surname1: "Vicens",
    //         surname2: "Valor",
    //         isAdmin: true,
    //         city: "Valencia",
    //         postalCode: "03803",
    //         phone: "666000666",
    //         regionId: 10,
    //         address1: "C/Debajo del Puente, 1",
    //         address2: "",
    //         token: ""
    //     })
    // })
    .catch(error =>
        console.error(`::[Error]:: Couldn't connect to database:`, error),
    );

module.exports = app;
