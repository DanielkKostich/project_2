const express = require('express');
const router = express.Router();
const { Customer } = require('../models');
const withAuth = require('../utils/auth');

// Main page route
router.get('/', (req, res) => {
  console.log('serving the homepage');
  res.render('homepage');
});

// Login page route
router.get('/login', (req, res) => {
  res.render('login');
});

// Employee login
router.get('/Employee_Login', (req, res) => {
  res.render('emplogin');
});

// post route for creating account

// Create Account page route
router.get('/signup', function(req, res, next) {
  res.render('create');
});

// Reviews page route
router.get('/reviews', function(req, res, next) {
  res.render('reviews');
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

module.exports = router;
