const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'client/build')));

//routes
//require('./routes')(app);

const port = process.env.PORT || 5000;
//add a DB later

app.listen(port,function(){
  console.log('listening on port 5000');
});