const router = require('express').Router();
const { Post } = require('../models/Post');

router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const postData = await Post.findAll().catch((err) => { 
      res.json(err);
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    // Pass serialized data into Handlebars.js template
    res.render('main', { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
