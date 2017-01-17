var mongoose = require('mongoose'),
davidCelebrity = require('../models/graphSchema');





exports.getData = function(req, res){
  var t1, t2;

    davidCelebrity.find({topic:'david bowie week'},function(err, docs){
        if (err){
              throw err;
        }
  
     t1 = docs; 

        davidCelebrity.find({topic:'celebrity death1'},function(error, docs){
            if (err){
                  throw err;
            }
   
     t2 = docs; 

    var res1 = {
        david:t1,
        celebrity:t2
    };

    res.json(res1);

         });
    });
}

