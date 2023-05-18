// import Review from './Review-model.js';

async function submitReview(event) {
  event.preventDefault();

  const nameInput = document.getElementById('name').value;
  const reviewInput = document.getElementById('text').value;
  const ratingInput = document.getElementById('rating').value;
  const sentenceInput = document.getElementById('sentence').value;

  const reviewData = {
    name: nameInput,
    review: reviewInput,
    rating: ratingInput,
    sentence: sentenceInput
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

document.getElementById('reviewForm').addEventListener('submit', submitReview);