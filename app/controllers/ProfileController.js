var request = require('request');
let sessionHelper = require('./../middleware/SessionMiddleware');

module.exports = function (app, passport) {

    app.get('/community', function (req, res) {
        res.render('profile/community.ejs');
    });

    app.get('/menu', function (req, res) {
        res.render('profile/menu.ejs');
    });

    app.get('/chat', function (req, res) {
        res.render('profile/chat.ejs');
    });
};