var router = express.Router();

app.get("/hello", function(req, res) {
    res.json({ greeting: 'hello API' });
});


module.exports = router;