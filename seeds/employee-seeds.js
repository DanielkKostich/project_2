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
];

const seedEmployees = () => Employee.bulkCreate(employeeData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedEmployees;
