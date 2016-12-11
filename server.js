var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.post('/handlepost', urlencodedParser, function (req, res) {
   response = {
      email:req.body.email,
      password:req.body.pwd
   };
   console.log(JSON.stringify(response));
   res.end(JSON.stringify(response));
})
 
var server = app.listen(80, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})