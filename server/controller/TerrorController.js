var mongoose = require('mongoose'),
terror = require('../models/graphSchema');





exports.getData = function(req, res){
    terror.find({topic:'Terror'},function(err, docs){
        console.log("docs "+docs);
        res.json(docs);
    });
}

