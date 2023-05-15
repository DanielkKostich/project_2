const express = require('express');
const router = require('express').Router();
const { User } = require('../models');
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

// Create Account page route
router.get('/signup', function(req, res, next) {
  res.render('create');
});

router.get('/reviews', function(req, res, next) {
  res.render('reviews');
});

module.exports = router;