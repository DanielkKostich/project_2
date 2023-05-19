const express = require('express');
const router = express.Router();
const { Customer, Review, Employee } = require('../models');
const withAuth = require('../utils/auth');

// Main page route
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err){
    console.log(err);
    res.status(500).json(err);
  }
});


// Login page route
router.get('/login', (req, res) => {
  res.render('login', {loggedIn: req.session.loggedIn,});
});


// Employee login
router.get('/Employee_Login', (req, res) => {
  res.render('emplogin', {loggedIn: req.session.loggedIn,});
});

// post route for creating account

// Create Account page route
router.get('/signup', function(req, res, next) {
  res.render('create');
});

// Reviews page route



router.get('/reviews', async (req, res) => {
  try {
    const dbReviewData = await Review.findAll({
      include: [
        {
          model: Customer,
          as: 'customer',
          attributes: ['username'],
        },
        {
          model: Employee,
          as: 'employee',
          attributes: ['name'],
        },
      ],
    });

    const reviews = dbReviewData.map((review) =>
      review.get({ plain: true })
    );
    res.render('reviews', {
      reviews,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});




router.get('/reviews/create', function(req, res, next) {
  res.render('create-reviews');
});

//meet the stylist page route
router.get('/stylist', function(req, res, next) {
  res.render('stylist');
});
// hours Route
router.get('/hours', function(req, res, ) {
  res.render('hours');
});

router.get('/prices', function(req, res, ) {
  res.render('prices');
});

module.exports = router;
