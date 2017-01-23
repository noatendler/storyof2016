var mongoose = require('mongoose'),
graphData = require('../models/graphSchema');
var top50 = require('../models/top50Schema');
var fs = require("fs");
var glob = require('glob');


exports.saveData = function(req, res){
 glob("localDocs/graphs/*", function(err, files) {
    for(var i=9; i<10; i++){
        var content = fs.readFileSync(files[i]);
        var jsonContent = JSON.parse(content);
    
        var myTopic;
        var arrayStory;
        var date;
        var count;

        for(var t=0; t<jsonContent.length; t++){
            var keys = Object.keys(jsonContent[t]);

            for (var i = 0; i < keys.length; i++) {
              //console.log(jsonContent[t][keys[i]]);
              if(keys[i] == "topic")
              {
                myTopic = jsonContent[t][keys[i]];
                //console.log("my topic is "+ myTopic);
              }
              if(keys[i] == "story")
              {
                //for(var temp=1; temp<366; temp++)
                //console.log(Object.keys(jsonContent[t]["story"]));

                var array_date = Object.keys(jsonContent[t]["story"]);
                for(var temp=0; temp<array_date.length; temp++){

                    var date = array_date[temp];
                    var count = (jsonContent[t]["story"][date]);

                    //console.log(myTopic+ " " +date + " "+ count);
                    var saveDoc = new graphData({
                    topic: myTopic,
                    date: date,
                    num: count,
                    });

                    saveDoc.save(function(err, res){
                        if(err){
                            console.log("error"+err);
                        }
                        else
                            console.log("save!");
                    });  
                }
                //console.log(jsonContent["story"]);
                
              }
            }
        }

    }
});

var jsonEvent;
    glob("localDocs/top50/*", function(err, files){
        for(var j=0; j<files.length; j++){
            //console.log(files[j]);
            var contentTop50 = fs.readFileSync(files[j]);
            jsonTop50 = JSON.parse(contentTop50);

            //console.log(jsonTop50);
        var Topic;

        for(var t=0; t<jsonTop50.length; t++){
            var keys = Object.keys(jsonTop50[t]);

            for (var i = 0; i < keys.length; i++) {
              if(keys[i] == "topic")
              {
                Topic = jsonTop50[t][keys[i]];
                console.log("my topic is "+ Topic);
              }
              if(keys[i] == "word")
              {
                  var array_words = Object.keys(jsonTop50[t]["word"]);
                for(var temp=0; temp<array_words.length; temp++){

                    var my_word = array_words[temp];
                    var count = (jsonTop50[t]["word"][my_word]);

                    var saveDoc = new top50({
                    topic: Topic,
                    word: my_word,
                    num: count,
                    });

                    saveDoc.save(function(err, res){
                        if(err){
                            console.log("error"+err);
                        }
                        else
                            console.log("save!");
                    });  

                    }

               }
            }

        }
    }
    });
}
