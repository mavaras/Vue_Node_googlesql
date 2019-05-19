require("dotenv");

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const connection = require("./database");
const app = express();

/* Settings */
app.set("port", 8080);

/* Middlewares */
app.use(morgan("dev"));
app.use(express.json());

/* Routes */
app.use("/urls", require("./routes/urls"));

/* Static files */
app.use(express.static(__dirname+"/public"));

/* Server */
app.listen(app.get("port"), () => {
    console.log("Server on port "+app.get("port"));
});
