const express = require ("express");
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:"root",
    host: "localhost",
    password: "",
    database: "test",
});

app.get("/getDados", (req, res) =>{  
    db.query("SELECT * FROM test.database LIMIT 1;", (err, result) =>{
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.get("/getBudget", (req, res) =>{   
    db.query("SELECT budget FROM test.budget LIMIT 1;", (err, result) =>{
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.get("/getTotal", (req, res) =>{  
    db.query("SELECT COUNT(nome) AS total FROM test.database;", (err, result) =>{
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

app.listen(3001, () =>{ console.log("Server 3001 running")});