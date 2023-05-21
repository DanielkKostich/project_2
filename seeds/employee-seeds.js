const { Employee } = require('../models');

const employeeData = [
  {
    name: 'Ozzy Parris',
    email: 'ozzyp@yahoo.com',
    password: 'curlqueen',
    photo: '../images/ozzy_parris.jpg',
  },
  {
    name: 'Hayley Tomaso',
    email: 'hay@gmail.com',
    password: 'quickclip',
    photo: '../images/hayley_tomaso.jpg',
    
  },
  {
    name: 'Chadd Shalehen',
    email: 'chaddd@hotmail.com',
    password: 'breathoffreshair',
    photo: '../images/chadd_shalehen.jpg',
  },
  {
    name: 'Clarita Marcel', 
    email: 'clarclar@aol.com',
    password: 'nowaybaybay',
    photo: '../images/clarita_marcel.jpg',
  },
  {
    name: 'Anna Banana',
    email: 'shopbanana@msn.com',
    password: 'peachespeaches',
    photo: '../images/anna_banana.jpg',
  },
  {
    name: 'Tom Petty',
    email: 'tpet1324@yahoo.com',
    password: 'thIs2356',
    photo: '../images/tom_petty.jpg',
  },
  {
    name: 'April Betts',
    email: 'abett6489@gmail.com',
    password: 'Hello48!',
    photo: '../images/april_betts.jpg',
  },
  {
    name: 'Breanne Hollister',
    email: 'bholla@yahoo.com',
    password: 'Goodday',
    photo: '../images/breanne_hollister.jpg',
  },
  {
    name: 'Tiffany Giles',
    email: 'tdizzle@gmail.com',
    password: 'Yass!!!23',
    photo: '../images/tiffany_giles.jpg',
  },
];

const seedEmployees = () => Employee.bulkCreate(employeeData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedEmployees;
