'use strict';
var accounts = require('../models/accounts.js');
var user = require('../models/userDetails.js');

module.exports = function (router) {

    router.post('/', function (req, res) {
        var model = accounts(req.body);
        if(model === "success") {
            res.send(user())
        } else {
            res.status(401);
            res.send('error');
        }

    });

};
