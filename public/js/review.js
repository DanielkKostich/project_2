const reviewFormHandler = async (event) => {
  event.preventDefault();
  const review = document.getElementById('review').value;
  const rating = document.querySelector('input[name="rate"]:checked').value;
  const sentence = document.getElementById('sentence').value;  
  const employee_id = document.getElementById('employee_id').value;
  const customer_id = customerId;


  if (rating, review, sentence, customer_id, employee_id) {
    // Send the e-mail and password to the server
    const response = await fetch('/api/customers/createreview', {
      method: 'POST',
      body: JSON.stringify({ rating, review, sentence, customer_id, employee_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/reviews');
    } else {
      alert('Failed to post review');
    }
  }
}





document.getElementById('submitbutton').addEventListener('click', reviewFormHandler);
