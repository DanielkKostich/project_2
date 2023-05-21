const router = require("express").Router();
const { Customer } = require("../../models");
const { Review } = require("../../models");
router.get("/", async (req, res) => {
  try {
    const custData = await Customer.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(custData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await Customer.findOne({
      where: { email: req.body.email },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Verify the posted password with the password store in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.username = userData.username;
      req.session.user_id = userData.customer_id;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.redirect("/400");
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post("/createuser", async (req, res) => {
  try {
    const { email, username, name, password } = req.body; // Assuming the email, name, and password are sent in the request body
    const customerData = await Customer.findOne({
      where: { email: req.body.email },
    });
    const usernameData = await Customer.findOne({
      where: { username: req.body.username},
    });

    // Check for existing customer with that E-Mail.
    if(customerData){
      res
        .status(400)
        .json({ message: "Customer with this email already exists." });
      return;
    }

    // Check to see if the username is already taken.
    if(usernameData){
      res
        .status(400)
        .json({ message: "This username is already taken." });
      return;
    }

    // Refuse to accept paramaters that could escape the sql input. 
    const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    const specialCharsEmail = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]/;
    const uppercaseChars = /[A-Z]/;
    const numericChars = /[0-9]/;
    if (specialChars.test(password)) {
      res
        .status(400)
        .json({ message: "Error, password contains an illegal symbol."});
      return;
    }
    if (specialChars.test(req.body.username)) {
      res
        .status(400)
        .json({ message: "Error, username contains an illegal symbol."});
      return;
    }
    if (specialCharsEmail.test(email)) {
      res
        .status(400)
        .json({ message: "Error, email contains an illegal symbol."});
      return;
    }

    if (!uppercaseChars.test(password)||!numericChars.test(password)) {
      res
        .status(400)
        .json({ message: "Error, email contains an illegal symbol."});
      return; // Stop form submission
    }
  
  


    // Create a new customer entry
    const newCustomer = await Customer.create({
      email,
      username,
      name,
      password,
    });

    req.session.save(() => {
      req.session.user_id = newCustomer.customer_id;
      req.session.username = newCustomer.username;
      req.session.loggedIn = true;
      res
        .status(200)
        .redirect("/");
    });
  } catch (err) {
    res.json(err);
  }
});

// Sending a post request here will now require every part of a review but should display it correctly. 
router.post("/createreview", async (req, res) => {
  try {
    const { rating, review, sentence, customer_id, employee_id } = req.body;
    const newReview = await Review.create({ rating, review, sentence, customer_id, employee_id });
    res.redirect("/reviews");
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;