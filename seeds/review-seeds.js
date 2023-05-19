const { Review } = require('../models');

const reviewData = [
  {
    rating: 5,
    review: 'He didn\'t leave a hair uncut!',
    sentence: 'Master barber!',
    customer_id: 1,
    employee_id: 2,
    appointment_id:1,
  },
  {
    rating: 1,
    review: 'He cut my whole head off!',
    sentence: 'Too sharp!',
    customer_id: 2,
    employee_id: 1,
    appointment_id:2,
  },
  {
    rating: 3,
    review: 'OK I guess',
    sentence: 'Alright',
    customer_id: 3,
    employee_id: 2,
    appointment_id:3,
  },
  {
    rating: 5,
    review: 'Came back and told him to glue it all back on just so he could cut it off again.',
    sentence: 'Better the second time!',
    customer_id: 1,
    employee_id: 2,
    appointment_id:4,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
