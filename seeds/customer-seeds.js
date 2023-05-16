const { Customer } = require('../models');

const customerData = [
  {
    name: 'John Michael',
    email: 'johnmike@yahoo.com',
    password: 'smoothking3000',
  },
  {
    name: 'Jo King',
    email: 'joker@gmail.com',
    password: 'wizeguy49',
  },
  {
    name: 'Roy Biv',
    email: 'colorful@hotmail.com',
    password: '2rainbow98',
  },
  {
    name: 'Lo Key',
    email: 'subtle@aol.com',
    password: 'nothere404',
  },
  {
    name: 'Arty Fischel',
    email: 'aiqueen@msn.com',
    password: 'cyberdyne101',
  },
];

const seedCustomers = () => Customer.bulkCreate(customerData);

module.exports = seedCustomers;
