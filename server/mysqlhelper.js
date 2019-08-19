const mysql= require("mysql");

let options = {
    connectionLimit:10,
    protocol:"mysql",
    host:"localhost",
    port:3306,
    user:"app",
    password:"meriYAAD1!",
    database:"meetme"
}

module.exports = {
    pool:mysql.createPool(options),
    query: function(sql,cb){
        this.pool.getConnection((error,conn)=>{
            if(error){
                cb({error});
                return;
            }
            conn.query(sql,(error,data,fields)=>{
                conn.release();
                cb({error,data});
            })
        })

    },
    paramQuery:function(sql,params,cb){
        this.pool.getConnection((error,conn)=>{
            if(error){
                cb({error});
                return;
            }
            conn.query(sql,params,(error,data,fields)=>{
                conn.release();
                cb({error,data});
            })
        })

    }
}

/* const pool=mysql.createPool({
    connectionLimit:10,
    protocol:"mysql",
    host:"localhost",
    port:3306,
    user:"app",
    password:"meriYAAD1!",
    database:"meetme"
});

let mysqlhelper = {};

//FOR ALL USERS
mysqlhelper.all = ()=>{
return new Promise((resolve,reject)=>{
pool.query('SELECT * FROM users',(err,results)=>{
    if(err) {
        return reject(err);
    }
    return resolve(results);
});

});


};

module.exports = mysqlhelper; */



/* 
const mysql= require("mysql");

let options = {
    connectionLimit:10,
    protocol:"mysql",
    host:"localhost",
    port:3306,
    user:"app",
    password:"meriYAAD1!",
    database:"meetme"
}
let pool = mysql.createPool(options);

pool.getConnection((err,conn)=>{
if(err){
    if(conn) conn.release();
    console.log("Error",err);
    return;
}
conn.query("SELECT * from users",(err,rows,fields)=>{
    console.log(rows);
    conn.release();
    pool.end((err)=>{
        if(err) console.log(err);
    });

});

});

module.exports = mysqlhelper; */