// view that has all the posts stored

var express = require('express');
var router = express.Router();

let post_array = [];

router.get('/', function(req, res, next) {
	res.json(post_array);
});

router.get('/', function(req, res, next) {
	res.status(200).json({ post_array });
});

router.post('/', function(req, res, next) {
	const post = req.body.post;
	post_array.unshift(post);
	res.status(200).json({ post });
});

module.exports = router;
