const express = require('express');
const router = express.Router();
const { Customer } = require('../models');
const withAuth = require('../utils/auth');
const Review = require ('../public/js/Review-model');

async function submitReview(event) {
  // event.preventDefault();

  // const nameInput = document.getElementById('name').value;
  // const reviewInput = document.getElementById('text').value;
  // const ratingInput = document.getElementById('rating').value;
  // const sentenceInput = document.getElementById('sentence').value;

  const reviewData = {
    name: "nameInput",
    review: "reviewInput",
    rating: "ratingInput",
    sentence: "sentenceInput"
  };
console.log(reviewData)
  try {
    
    const createdReview = await Review.create(reviewData);

    if (createdReview) {
      console.log('Review saved successfully:', createdReview);
      
    } else {
      console.log('Failed to save the review.');
     
    }
  } catch (error) {
    
    console.error('Error saving review:', error);
  }
}
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

router.get('/reviews/create', async function(req, res, next) {
  const reviewData = {
    name: "nameInput",
    review: "reviewInput",
    rating: "ratingInput",
    sentence: "sentenceInput"
  };
  const createdReview = await Review.create(reviewData);
  res.render('create-reviews',{createdReview});
});

module.exports = router;
