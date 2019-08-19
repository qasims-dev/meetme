const express = require("express");
const cors = require('cors')


//var url = require("url");
//const apiRouter = require("./routes/routes");

const bodyParser = require("body-parser");
var app = express();
//app.use(express.json());
app.use(bodyParser.json());
app.use(cors()); // Use this after the variable declaration
//app.use('/api/users',apiRouter);
  let db = require('./mysqlhelper');
let usersApi = require('./api/usersapi'); 

usersApi(app,db); 

//app.use(usersApi(app,db));
  /* app.use('/api/users',(req,res,next)=>{
    //var url_parts = url.parse(req.url);
    //console.log(url_parts);
    //console.log(url_parts.pathname);
  //  let db = require('./mysqlhelper');
  console.log("API CALLED IN SERVER");
next();
//console.log("two");
//let db = require('./mysqlhelper');
 // let usersApi = require('./api/usersapi');
    usersApi(app,db);
});   */
const port = 9000;
app.listen(port,()=>{
   console.log("Servers is runningss");
})