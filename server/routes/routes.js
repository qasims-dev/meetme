const express = require("express");
var url = require("url");
const bodyParser = require("body-parser");
var app = express();
app.use(express.json());
app.use(bodyParser.json());
let db = require('../mysqlhelper');
let usersApi = require('../api/usersapi');


const routes = express.Router();
console.log("Inside ROUTER");
routes.get('/all',(req,res,next)=>{
     /* var url_parts = url.parse(req.url);
    console.log(url_parts);
    console.log(url_parts.pathname);  */
  //  let db = require('./mysqlhelper');
  console.log("API CALLED IN ROUTERss");
next();
//console.log("two");
//let db = require('./mysqlhelper');
 // let usersApi = require('./api/usersapi');
 console.log("USERSAPI GOING TO BE CALLED");
 console.log(req.url);
    usersApi(app,db);
});

routes.use('/api/users',(req,res,next)=>{
    next();
    console.log("IN THE NEW FUNCTION");
    usersApi(app,db);
})
/* router.get('/',async (req,res,next)=>{
//res.json({test:'test'});
try{
    let results = await db.all();
    res.json(results);
}
catch(e)
{console.log(e);
res.sendStatus(500);
}
}); */

module.exports = routes;