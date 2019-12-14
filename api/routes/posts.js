var express = require('express');
var router = express.Router();

let posts = [];

router.get('/', function(req, res, next) {
	res.json(posts);
});

router.get('/', function(req, res, next) {
	res.status(200).json({ posts });
});

router.post('/', function(req, res, next) {
	const post = req.body.post;
	posts.unshift(post);
	res.status(200).json({ post });
});

module.exports = router;
