const express = require('express');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodemysql",
  });

db.createConnection((err) => {
    if (err){
    throw err;
    }
    console.log("MySQL connected.")
});

const app = express();

app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE nodemysql";

    db.query(sql, (err) => {
    if (err) {
        throw err;
    }
    res.send("Database created.");
});
});

app.get("/createemployee", (req, res) => {
    let sql = "CREATE TABLE employee(id int AUTO_INCREMENT, name VARCHAR(255), designation VARCHAR(255), PRIMARY KEY(id))";
  
    db.query(sql, (err) => {
      if (err) {
        throw err;
      }
      res.send("Employee table created.");
    });
  });

  app.get("/employee1", (req, res) => {
    let post = { name: "Jake Smith", designation: "Chief Executive Officer" };
  
    let sql = "INSERT INTO employee SET ?";
  
    let query = db.query(sql, post, (err) => {
      if (err) {
        throw err;
      }
      res.send("Employee 1 added");
    });
  });