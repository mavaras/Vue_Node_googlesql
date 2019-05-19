const express = require("express");
const router = express.Router();

const Test = require("../models/Test");

router.get("/algo", (req, res) => {
    res.send("algo");
});
router.get("/test", (req, res) => {
    res.send("test");
});

router.post("/", async (req, res) => {
    console.log("post received");
});
router.post("/db/insert", (req, res) => {
    console.log("insert db");

    require("../database").query(
        'INSERT INTO test values("'+req.body["date"]+'", "'
                                   +req.body["time"]+'", "'
                                   +req.body["place"]+'", "'
                                   +req.body["phone"]+'")', req.params.place,
        function(error, results, fields) {
            if (error) throw error;
            res.json(results);
        }
    );
});

module.exports = router;
