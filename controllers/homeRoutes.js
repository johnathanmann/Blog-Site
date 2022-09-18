const router = require('express').Router();
const { Post } = require('../models/Post');

router.get('https://murmuring-escarpment-36262.herokuapp.com//', async (req, res) => {
    try {
      res.render('posts');
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('https://murmuring-escarpment-36262.herokuapp.com//login', async (req, res) => {
    try {
      res.render('login');
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('https://murmuring-escarpment-36262.herokuapp.com//sign-up', async (req, res) => {
    try {
      res.render('signup');
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;