const express = require('express');
const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');


// Main page route
router.get('/', (req, res) => {
  res.render('homepage');
});

// Login page route
router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;