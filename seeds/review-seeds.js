const { Review } = require('../models');

const reviewData = [
  {
    customer_id: 1,
    employee_id: 2,
  },
  {
    customer_id: 1,
    employee_id: 3,
  },
  {
    customer_id: 1,
    employee_id: 5,
  },
  {
    customer_id: 2,
    employee_id: 1,
  },
  {
    customer_id: 3,
    employee_id: 1,
  },
  {
    customer_id: 3,
    employee_id: 4,
  },
  {
    customer_id: 3,
    employee_id: 5,
  },
  {
    customer_id: 4,
    employee_id: 1,
  },
  {
    customer_id: 4,
    employee_id: 2,
  },
  {
    customer_id: 4,
    employee_id: 5,
  },
  {
    customer_id: 5,
    employee_id: 3,
  },
];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;
