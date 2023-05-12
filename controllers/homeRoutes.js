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

// Create Account page route
router.get('/create', (req, res) => {
  res.render('create');
});

module.exports = router;