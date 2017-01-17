var mongoose = require('mongoose'),
top50 = require('../models/top50Schema');





exports.getData = function(req, res){
    top50.find({topic:'year'},function(err, docs){
        console.log("docs "+docs);
        res.json(docs);
    });
}

