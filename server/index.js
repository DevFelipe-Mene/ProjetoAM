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

app.post("/adicionar", (req,res) =>{
    const nome = req.body.nome
    const salario = req.body.salario
    const pais = req.body.pais

    db.query("INSERT INTO test.database (nome, salario, pais) VALUES (?,?,?);", [nome, salario, pais], (err, result) =>{
        if (err) {
            console.log(err)
        }else{
            res.send("Inserido com sucesso");
        }
    });
});

app.get("/getLista", (req, res) =>{  
    db.query("SELECT nome, salario, pais FROM test.database LIMIT 5;", (err, result) =>{
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