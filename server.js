// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var multer = require('multer');

var upload = multer({ dest: '/tmp'});

var size = null;

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post('/upload', upload.single('uploadfile'), function(req,res){
 
  var ret = { size: req.file.size};
  res.end(JSON.stringify(ret));
});




// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
