var express = require('express');
var router = express.Router();

router.get("/hello", (req, res) => {
    res.json({ greeting: 'hello API' });
});


router.get("/timestamp/", (req, res) => {
    date = new Date();
    console.log("current date");
    res.json({ "unix": date.getTime(), "utc": date.toUTCString() })
});

router.get("/timestamp/:date_string", (req, res) => {
    let dateString = req.params.date_string;
    if (/\d{5,}/.test(dateString)) {
        dateInt = parseInt(dateString);
        //Date regards numbers as unix timestamps, strings are processed differently
        res.json({ unix: dateString, utc: new Date(dateInt).toUTCString() });
    }

    let date = new Date(dateString);
    if ((date !== "Invalid Date") && !isNaN(date)) {
        res.json({ "unix": date.getTime(), "utc": date.toUTCString() });
    } else {
        res.json({ "error": "Invalid Date" });
    }
});

module.exports = router;