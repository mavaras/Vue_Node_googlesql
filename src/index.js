require("dotenv");

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connection = require("./database");
const app = express();

/* Settings */
app.set("port", 3000);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/* Routes */
app.use("/urls", require("./routes/urls"));

/*app.route("/db/:place").get(function(req, res, next) {
    console.log("db");
    connection.query(
        "SELECT * FROM `test` WHERE place = ?", req.params.place,
        function(error, results, fields) {
            if (error) throw error;
            res.json(results);
            console.log(results[0]["date"]);
        }
    );
});*/

/* Static files */
app.use(express.static(__dirname+"/public"));

/* Server */
app.listen(app.get("port"), () => {
    console.log("Server on port "+app.get("port"));
});
