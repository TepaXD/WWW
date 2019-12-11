var express = require('express');
var router = express.Router();

let posts = [
	{
		id: 0,
		name: 'test',
		post: 'moi oon backistä',
	},
	{
		id: 1,
		name: 'temexd',
		post: 'täähän toimii :D',
	},
];

router.get('/', function(req, res, next) {
	res.json(posts);
});

module.exports = router;
