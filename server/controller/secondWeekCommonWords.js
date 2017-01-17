var mongoose = require('mongoose'),
top50sec = require('../models/top50Schema');





exports.getData = function(req, res){
    top50sec.find({topic:'second week'},function(err, docs){
        console.log("docs "+docs);
        res.json(docs);
    });
}

