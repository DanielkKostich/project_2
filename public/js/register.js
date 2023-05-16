// function to handle review submission
function submitReview(event) {
  event.preventDefault();

  // form values
  const nameInput = document.getElementById('name').value;
  const reviewInput = document.getElementById('text').value;
  const ratingInput = document.getElementById('rating').value;

  // perform additional validation as required

  // creates an object with the review data
  const reviewData = {
    name: nameInput,
    review: reviewInput,
    rating: ratingInput
  };
console.log(reviewData)
  // use the reviewData as needed
  // for example, you can store it in an array or make an API call to save the review on the server
  // optionally, display a success message or perform any other post-submission actions
}


document.getElementById('reviewForm').addEventListener('submit', submitReview);
  