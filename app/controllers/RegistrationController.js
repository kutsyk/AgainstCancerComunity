let request = require('request')
    , requestPromise = require('request-promise')
    , promises = require('promises')
    , fs = require('fs')
    , ObjectID = require('mongodb').ObjectID
    , MongoDB = require('./../../config/database.js')
    , http = require('http');

module.exports = function (app) {

    app.get('/body', function (req, res, next) {
        res.render('registration/body.ejs');
    });

    app.get('/level/:organ', function (req, res, next) {
        res.render('registration/level.ejs', {
            organ: req.params.organ
        });
    });
};