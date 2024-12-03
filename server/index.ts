const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");


app.use(cors());

const db = mysql.createPool({
    connectionLimit: 4,
    host: process.env.DB_HOST,
    user:     'root',
    password: 'iloveu',
    database: 'sunnysspace'
});
app.get("/", (req, res) => {
    res.send("Hello World!");
})
app.listen(8080, () => console.log("Listening on port 8080"));