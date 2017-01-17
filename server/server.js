var express=require('express');
var app = express();

var init = require('./controller/initcontroller');
var comm1 = require('./controller/firstWeekCommonWords');
var comm2 = require('./controller/secondWeekCommonWords');
var terror = require('./controller/TerrorController');
var syria = require('./controller/syriaController');
var commyear = require('./controller/commonWordsYear');
var davidCelebrity = require('./controller/weekDavidController');
var princeCelebrity = require('./controller/princeCelebrityController');
var allCelebrity = require('./controller/allCelebrityController');
var zikaEbola = require('./controller/zikaEbolaController');


var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartAction = multipart();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.set('port', port);

app.use('/init', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});


app.use('/commonFirstWeek', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});


app.use('/commonSecondtWeek', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.use('/terror', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.use('/syria', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.use('/commyear', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.use('/davidCelebrity', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.use('/princeCelebrity', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.use('/allCelebrity', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.use('/zikaEbola', express.static('./public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
app.set('json spaces', 4);
res.set("Content-Type", "application/json");
  next();
});

app.get('/init', init.saveData);
app.get('/commonFirstWeek', comm1.getData);
app.get('/commonSecondtWeek', comm2.getData);
app.get('/terror', terror.getData);
app.get('/syria', syria.getData);
app.get('/commyear', commyear.getData);
app.get('/davidCelebrity', davidCelebrity.getData);
app.get('/princeCelebrity', princeCelebrity.getData);
app.get('/allCelebrity', allCelebrity.getData);
app.get('/zikaEbola', zikaEbola.getData);

app.listen(port);