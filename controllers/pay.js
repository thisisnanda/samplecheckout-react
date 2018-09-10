'use strict';

module.exports = function (router) {

    router.post('/', function (req, res) {
        if(Object.keys(req.body).length > 0) {
            res.send(req.body);
        } else {
            res.status(403);
            res.send("Error");
        }
    });

};
