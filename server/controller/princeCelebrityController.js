var mongoose = require('mongoose'),
princeCelebrity = require('../models/graphSchema');





exports.getData = function(req, res){
  var t1, t2;

    princeCelebrity.find({topic:'prince week'},function(err, docs){
        if (err){
              throw err;
        }
  
     t1 = docs; 

        princeCelebrity.find({topic:'celebrity death4'},function(error, docs){
            if (err){
                  throw err;
            }
   
     t2 = docs; 

    var res1 = {
        prince:t1,
        celebrity:t2
    };

    res.json(res1);

         });
    });
}

