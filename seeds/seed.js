const seedCustomers = require('./customer-seeds');
const seedEmployees = require('./employee-seeds');
const seedAppointments = require('./appointment-seeds');
const seedCustEmp = require('./cust-emp-seeds');

const sequelize = require('../config/connection');
const seedReviews = require('./review-seeds');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCustomers();
  console.log('\n----- CUSTOMERS SEEDED -----\n');

  await seedEmployees();
  console.log('\n----- EMPLOYEES SEEDED -----\n');

  await seedAppointments();
  console.log('\n----- APPOINTMENTS SEEDED ----- \n')

  await seedReviews();
  console.log('\n----- CUSTOMER REVIEWS SEEDED -----\n');
  process.exit(0);
};

seedDatabase();
