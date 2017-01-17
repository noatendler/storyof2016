var mongoose = require('mongoose'),
zikaEbola = require('../models/graphSchema');





exports.getData = function(req, res){
  var t1, t2;

    zikaEbola.find({topic:'zika'},function(err, docs){
        if (err){
              throw err;
        }
  
     t1 = docs; 

        zikaEbola.find({topic:'ebola'},function(error, docs){
            if (err){
                  throw err;
            }
   
     t2 = docs; 

    var res1 = {
        zika:t1,
        ebola:t2
    };

    res.json(res1);

         });
    });
}

