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
  {
    name: 'Jack Skellington',
    email: 'jskell@hotmail.com',
    password: 'Skelly1698',
  },
  {
    name: 'Garfield',
    email: 'gfield@yahoo.com',
    password: 'Iforgot1212',
  },
  {
    name: 'Tony Hawk',
    email: 'thawk@gmail.com',
    password: 'Whatsthis3443',
  },
  {
    name: 'Daniel Kostich',
    email: 'Mysticvert@yahoo.com',
    password: 'Password1234',
  },
  {
    name: 'Penolope Smith',
    email: 'pen28@yahoo.com',
    password: 'Pilot1672',
  },
  {
    name: 'Brittney Koch',
    email: 'bdawg@yahoo.com',
    password: 'Lala9012',
  },
  {
    name: 'Ally Bright',
    email: 'ablight@yahoo.com',
    password: 'LiGhthouse46',
  },
];

const seedCustomers = () => Customer.bulkCreate(customerData);

module.exports = seedCustomers;
