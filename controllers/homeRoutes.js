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
  res.render('create', {loggedIn: req.session.loggedIn,});
});

// Customer Profiles route
router.get('/customer/:username', async (req, res) => {
  try {
    const { username } = req.params; 
    const dbCustomerData= await Customer.findOne({ where: { username: username } });
    const customer = dbCustomerData.get({ plain: true });
    res.render('profile', { customer, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//User profile route
router.get('/profile', async (req, res) => {
  try {
    if (!req.session.loggedIn) {
      return res.status(400).json({ error: 'Not logged in' });
    }

    const username = req.session.username;
    res.redirect(`/customer/${username}`);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
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

module.exports = router;
