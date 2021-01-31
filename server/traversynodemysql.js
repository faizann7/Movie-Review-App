const e = require('express');
const express =require('express');
const mysql = require('mysql')


const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'nodemysql'
})

db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('Mysql connected..');
})
const app = express();


// app.get("/", (req,res)=>{
//     let sql = 'CREATE DATABASE nodemysql';
//     db.query(sql, (err ,results) =>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created....')
//     })
// })


app.get('/addpost', (req,res)=>{
    let sql = 'CREATE TABLE movie(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))';
    db.query(sql, (err, result )=>{
        if(err) throw err;
        console.log(result);
        res.send('table created....')
    })
})


app.get('/addpost1', (req,res)=>{
    let movie = { title: 'Batman', body: 'nice!!!'};
    let sql = 'INSERT INTO movie SET ?';
    let query = db.query(sql, movie, (err, result) =>{
        if(err) throw err;
        console.log(result);
        res.send("Post 2 added..");
    })
})

app.get('/deletepost/:id', (req,res)=>{
    let sql = `DELETE FROM movie WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, resu    lt) =>{
        if(err) throw err;
        console.log(result);
        res.send('POST DELETED') 
    })
})


app.listen(3001, ()=>{
    console.log("running on port 3001");
})