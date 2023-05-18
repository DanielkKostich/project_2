const { Employee } = require('../models');

const employeeData = [
  {
    name: 'Ozzy Parris',
    email: 'ozzyp@yahoo.com',
    password: 'curlqueen',
  },
  {
    name: 'Hayley Tomaso',
    email: 'hay@gmail.com',
    password: 'quickclip',
  },
  {
    name: 'Chadd Shalehen',
    email: 'chaddd@hotmail.com',
    password: 'breathoffreshair',
  },
  {
    name: 'Clarita Marcel', 
    email: 'clarclar@aol.com',
    password: 'nowaybaybay',
  },
  {
    name: 'Anna Banana',
    email: 'shopbanana@msn.com',
    password: 'peachespeaches',
  },
  {
    name: 'Tom Petty',
    email: 'tpet1324@yahoo.com',
    password: 'thIs2356',
  },
  {
    name: 'April Betts',
    email: 'abett6489@gmail.com',
    password: 'Hello48!',
  },
  {
    name: 'Breanne Hollister',
    email: 'bholla@yahoo.com',
    password: 'Goodday',
  },
];

const seedEmployees = () => Employee.bulkCreate(employeeData);

module.exports = seedEmployees;
