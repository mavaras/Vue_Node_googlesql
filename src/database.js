const mysql = require("mysql");

// database connection for deploying in Cloud Shell
let config = {
    //host: "104.197.131.49",
    //host: "35.241.174.226",
    user: "myuser",
    database: "my_db",
    password: "suilluss",
}

if ("innovati-2:europe-west1:mydb" && process.env.NODE_ENV === "production") {
    config.socketPath = `/cloudsql/innovati-2:europe-west1:mydb`;
}

let connection = mysql.createConnection(config);

module.exports = connection;
