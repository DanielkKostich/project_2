const router = require('express').Router();
const { Customer } = require('../../models');
router.get('/', async (req, res) => {
  try {
    const custData = await Customer.findAll({
      attributes: {exclude: ['password']}
    });
    res.status(200).json(custData);
  } catch (err) {
    res.status(500).json(err);
  }
  })

router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await Customer.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.cusid;
      req.session.loggedIn = true;
      res.render('homepage');
    });

  } catch (err) {
    res.redirect('/400');
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/createuser', async (req, res) => {
  try {
    const { email, username, name, password } = req.body; // Assuming the email, name, and password are sent in the request body

    // Create a new customer entry
    const newCustomer = await Customer.create({ email, username, name, password });

    req.session.save(() => {
      req.session.user_id = newCustomer.cusid;
      req.session.loggedIn = true;  
      res.redirect('/');
    });
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;
