const mysql = require("mysql");
const dotenv = require("dotenv").config();


// database connection for deploying in Cloud Shell
let config = {
    //host: "104.197.131.49",
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
}

if (process.env.DB_INSTANCE && process.env.NODE_ENV === "production") {
    config.socketPath = `/cloudsql/innovati-2:europe-west1:mydb`;
}

let connection = mysql.createConnection(config);
connection.connect((err) => {
    console.log("error connecting");
});

module.exports = connection;
