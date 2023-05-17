const { Review } = require('../models');

const reviewData = [
  {
    rating: 5,
    review: 'He didn\'t leave a hair uncut!',
    customer_cusid: 1,
    employee_empid: 2,
    appointment_id:1,
  },
  {
    rating: 1,
    review: 'He cut my whole head off!',
    customer_cusid: 2,
    employee_empid: 1,
    appointment_id:2,
  },
  {
    rating: 3,
    review: 'OK I guess',
    customer_cusid: 3,
    employee_empid: 2,
    appointment_id:3,
  },
  {
    rating: 5,
    review: 'Came back and told him to glue it all back on just so he could cut it off again.',
    customer_cusid: 1,
    employee_empid: 2,
    appointment_id:4,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
