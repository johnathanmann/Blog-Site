const router = require('express').Router();
const { Post } = require('../models/Post');

router.get('/', async (req, res) => {
    try {
      res.render('posts');
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;