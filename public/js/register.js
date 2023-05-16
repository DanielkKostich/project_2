function createUser() {
  event.preventDefault();

  // form values
  const emailInput = document.getElementById('email-register').value;
  const nameInput = document.getElementById('name-register').value;
  const password1 = document.getElementById('password-register-a').value;
  const password2 = document.getElementById('password-register-b').value;
  const submitbutton = getElementById('submitbutton')

  // perform additional validation as required
// Check if both passwords are the same
if (password1 !== password2){
  document.getElementById('password-reigster-a').preview="Error: Passwords do not match.";
  let password1 = "";
  let password2 = "";
  return;
};

  // creates an object with the review data
  const newUserData = {
    email: emailInput,
    name: nameInput,
    password: verifiedPassword,
  };
console.log(newUserData)
  // use the reviewData as needed
  // for example, you can store it in an array or make an API call to save the review on the server
  // optionally, display a success message or perform any other post-submission actions
}


submitbutton.addEventListener('click', createUser);
  