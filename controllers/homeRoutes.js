const express = require('express');
const router = express.Router();
const { Customer, Review, Employee } = require('../models');
const withAuth = require('../controllers/api/localStrategy');

// Main page route
router.get('/', async (req, res) => {
  try {
    if (req.user) {
      req.session.loggedIn = true;
      const { username } = req.user; // Access the username property from the serialized user object
      res.render('homepage', {
        loggedIn: req.user,
        username: username, // Pass the username to the template
      });
    } else {
      res.render('homepage', {
        loggedIn: false,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// Login page route
router.get('/login', (req, res) => {
  res.render('login', {loggedIn: req.user,});
});


// Employee login
router.get('/Employee_Login', (req, res) => {
  res.render('emplogin', {loggedIn: req.user,});
});

// post route for creating account

// Create Account page route
router.get('/signup', function(req, res, next) {
  res.render('create', {loggedIn: req.user,});
});

// Customer Profiles route
router.get('/customer/:username', async (req, res) => {
  try {
    const { username } = req.params; 
    const dbCustomerData= await Customer.findOne({ where: { username: username } });
    const customer = dbCustomerData.get({ plain: true });
    res.render('profile', { customer, loggedIn: req.user });
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
      loggedIn: req.user,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/reviews/create', async (req, res) => {
  try{
    const dbEmployeeData = await Employee.findAll();
    const employees = dbEmployeeData.map((employee) =>
    employee.get({ plain: true })
    );
    res.render('create-reviews', { employees ,customer_id: req.session.user_id,loggedIn: req.user});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//meet the stylist page route
router.get('/stylist', function(req, res, next) {
  res.render('stylist', {loggedIn: req.user});
});
// hours Route
router.get('/hours', function(req, res, ) {
  res.render('hours', {
    loggedIn: req.user,
  });
});

router.get('/prices', function(req, res, ) {
  res.render('prices', {
    loggedIn: req.user,
  });
});

module.exports = router;
