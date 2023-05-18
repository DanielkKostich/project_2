const { Customer } = require('../models');

const customerData = [
  {
    username: 'johnmike',
    name: 'John Michael',
    username: 'JMiche',
    email: 'johnmike@yahoo.com',
    password: 'smoothking3000',
  },
  {
    username: 'joker',
    name: 'Jo King',
    username: 'Haha',
    email: 'joker@gmail.com',
    password: 'wizeguy49',
  },
  {
    username: 'colorful',
    name: 'Roy Biv',
    username: 'Roy',
    email: 'colorful@hotmail.com',
    password: '2rainbow98',
  },
  {
    username: 'subtle',
    name: 'Lo Key',
    username: 'Lo',
    email: 'subtle@aol.com',
    password: 'nothere404',
  },
  {
    username: 'Fish',
    name: 'Arty Fischel',
    email: 'aiqueen@msn.com',
    password: 'cyberdyne101',
  },
];

const seedCustomers = () => Customer.bulkCreate(customerData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedCustomers;
