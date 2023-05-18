const reviewFormHandler = async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const review = document.getElementById('text').value;
  const rating = document.getElementById('rating').value;
  const sentence = document.getElementById('sentence').value;  


  if (name && review && rating) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/customers/createreview', {
      method: 'POST',
      body: JSON.stringify({ name, review, rating }),
      headers: { 'Content-Type': 'application/json' },
    });
  }
}



document.getElementById('reviewForm').addEventListener('submit', reviewFormHandler);
