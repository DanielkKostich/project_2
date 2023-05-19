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
  {
    username: 'jskell',
    name: 'Jack Skellington',
    email: 'jskell@hotmail.com',
    password: 'Skelly1698',
  },
  {
    username: 'gfield',
    name: 'Garfield',
    email: 'gfield@yahoo.com',
    password: 'Iforgot1212',
  },
  {
    username: 'thawk',
    name: 'Tony Hawk',
    email: 'thawk@gmail.com',
    password: 'Whatsthis3443',
  },
  {
    username: 'mysticvert',
    name: 'Daniel Kostich',
    email: 'Mysticvert@yahoo.com',
    password: 'Password1234',
  },
  {
    username: 'pen28',
    name: 'Penolope Smith',
    email: 'pen28@yahoo.com',
    password: 'Pilot1672',
  },
  {
    username: 'bdawg',
    name: 'Brittney Koch',
    email: 'bdawg@yahoo.com',
    password: 'Lala9012',
  },
  {
    username: 'ablight',
    name: 'Ally Bright',
    email: 'ablight@yahoo.com',
    password: 'LiGhthouse46',
  },
];

const seedCustomers = () => Customer.bulkCreate(customerData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedCustomers;
