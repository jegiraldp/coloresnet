const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('views',__dirname+'/views')
app.set('public',__dirname+'/public')
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

app.get('/',(req,res)=> {
  res.render('index.ejs');
});

var port = process.env.PORT || 8080;

const server = app.listen(port,()=>{
    console.log(">>ColorNet ok;");
});
