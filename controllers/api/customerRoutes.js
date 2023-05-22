const express = require('express');
const router = express.Router();
const { Customer } = require('../../models');
const { Review } = require('../../models');


router.get('/', async (req, res) => {
  try {
    const custData = await Customer.findAll({
      attributes: { exclude: ['password'] },
    });
    res.status(200).json(custData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const customer = await Customer.findOne({ where: { email } });

    if (!customer || !customer.validPassword(password)) {
      res.status(400).json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = customer.username;
      req.session.user_id = customer.customer_id;

      res.status(200).json({ user: customer, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/createuser', async (req, res) => {
  try {
    const { email, username, name, password } = req.body;

    const existingEmail = await Customer.findOne({ where: { email } });
    if (existingEmail) {
      res.status(400).json({ message: 'Customer with this email already exists.' });
      return;
    }

    const existingUsername = await Customer.findOne({ where: { username } });
    if (existingUsername) {
      res.status(400).json({ message: 'This username is already taken.' });
      return;
    }

    // Validate password criteria
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      res.status(400).json({
        message:
          'Password must contain at least 8 characters, including at least one lowercase letter, one uppercase letter, and one number.',
      });
      return;
    }
    const newCustomer = await Customer.create({ email, username, name, password });
    req.login(newCustomer, function(err) {
      if (err) { return next(err); }
      res.redirect('/');
    });
  } catch (err) {
    res.status(500).json(err);
  }
});



router.post('/createreview', async (req, res) => {
  try {
    const { rating, review, sentence, customer_id, employee_id } = req.body;
    const newReview = await Review.create({ rating, review, sentence, customer_id, employee_id });
    res.redirect('/reviews');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
