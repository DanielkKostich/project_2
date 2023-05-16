
const submitbutton = document.getElementById('submitbutton')

function createUser(event) {
  event.preventDefault();

  // Retrieve form input values
  const emailInput = document.getElementById('email').value;
  const nameInput = document.getElementById('name').value;
  const passwordInput = document.getElementById('Password_a').value;

  // Create an object to store the form data
  const formData = {
    email: emailInput,
    name: nameInput,
    password: passwordInput
  };
  console.log(formData);
}

// Add event listener to the form submission
// const registrationForm = document.getElementById('register');
// registrationForm.addEventListener('submit', createUser);






function validateForm(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the password fields
  var password_a = document.getElementById('Password_a');
  var password_b = document.getElementById('Password_b');
  var emailField = document.getElementById('email');
  var emailValue = emailField.value;
  var nameField = document.getElementById('name');
  var nameValue = nameField.value;

  // Get the password values
  var passwordValue_a = password_a.value;
  var passwordValue_b = password_b.value;

  // Regular expressions for validation
  var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  var uppercaseChars = /[A-Z]/;
  var numericChars = /[0-9]/;

  // Check that the E-Mail is an E-Mail
  if (!validateEmail(emailValue)) {
    displayErrorMessage(document.getElementById('email'),'Invalid email address.');
    emailField.value = '';
    emailField.focus();
    return false; // Stop form submission
  }
  // Check that they entered something for the name
  if (nameValue.trim() === '') {
    displayErrorMessage(nameField, 'Please enter your name.');
    nameField.focus();
    return false; // Stop form submission
  }

  // Check if the passwords match
  if (passwordValue_a !== passwordValue_b) {
    displayErrorMessage(document.getElementById('Password_a'),'Passwords do not match.');
    clearPasswords();
    password_a.focus();
    return false; // Stop form submission
  }

  // Check password length
  if (passwordValue_a.length < 8 || passwordValue_b.length < 8) {
    displayErrorMessage(document.getElementById('Password_a'),'Password should be at least 8 characters long.');
    clearPasswords();
    password_a.focus();
    return false; // Stop form submission
  }

  // Check for special characters
  if (specialChars.test(passwordValue_a)) {
    displayErrorMessage(document.getElementById('Password_a'),'Passwords should not contain any special characters.');
    clearPasswords();
    password_a.focus();
    return false; // Stop form submission
  }

  // Check for at least one uppercase letter
  if (!uppercaseChars.test(passwordValue_a)) {
    displayErrorMessage(document.getElementById('Password_a'),'Password should contain at least one capitalized letter.');
    clearPasswords();
    password_a.focus();
    return false; // Stop form submission
  }

  // Check for at least one numeric digit
  if (!numericChars.test(passwordValue_a)) {
    displayErrorMessage(document.getElementById('Password_a'),'Password should contain at least one number.');
    clearPasswords();
    password_a.focus();
    return false; // Stop form submission
  }

  // If all validations pass, you can proceed with form submission
  // Uncomment the next line if you want the form to be submitted:
  document.getElementById('register').submit();

  //E-Mail validation function
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Helper function to display error message
  function displayErrorMessage(input, message) {
    // Add the error message below the focused input field
    var errorDiv = document.createElement('div');
    errorDiv.classList.add('error-message');
    errorDiv.innerHTML = message;
    input.parentNode.insertBefore(errorDiv, input.nextSibling);
  
    // Change the field's color to red
    input.classList.add('error');
  
    // Remove the error message and revert the color change after a couple of seconds
    setTimeout(function() {
      // Use opacity and interval to gradually fade out the error message
      var opacity = 1;
      var interval = setInterval(function() {
        opacity -= 0.1;
        errorDiv.style.opacity = opacity;
        if (opacity <= 0) {
          // Remove the error message and revert the color change
          clearInterval(interval);
          errorDiv.remove();
          input.classList.remove('error');
        }
      }, 200);
    }, 1000);
  }

  // Helper function to clear the password fields
  function clearPasswords() {
    password_a.value = '';
    password_b.value = '';
  }
}


submitbutton.addEventListener('click', validateForm);
  