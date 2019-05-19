const mysql = require("mysql");

// Database Connection for Production

let config = {
    //host: "104.197.131.49",
    //host: "35.241.174.226",
    user: "myuser",
    database: "my_db",
    password: "suilluss",
}

// let config = {
//     user: process.env.SQL_USER,
//     database: process.env.SQL_DATABASE,
//     password: process.env.SQL_PASSWORD,
// }

if ("innovati-2:europe-west1:mydb" && process.env.NODE_ENV === 'production') {
    config.socketPath = `/cloudsql/innovati-2:europe-west1:mydb`;
}

// let connection = mysql.createConnection(config);

let connection = mysql.createConnection(config);
module.exports = connection;
