var passport = require('passport');
var LocalStrategy = require('../../controllers/api/localStrategy');

const loginFormHandler = async (event) => {
  // Stop the browser from submitting the form so we can do so with JavaScript
  event.preventDefault();

  // Gather the data from the form elements on the page
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (email && password) {
    // Send the e-mail and password to the server
    // const response = await fetch('/api/passport/login', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    //   headers: { 'Content-Type': 'application/json' },
    // });

    // if (response.ok) {
    //   document.location.replace('/');
    // } else {
    //   alert('Failed to log in');
    // }



    router.post('/login/password',
  passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }),
  function(req, res) {
    res.redirect('/customer/' + req.user.username);
  });




  }
};

submitbutton = document.getElementById('submit')
submitbutton.addEventListener('submit', loginFormHandler);
