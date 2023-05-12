const seedCustomers = require('./customer-seeds');
const seedEmployees = require('./employee-seeds');
const seedCustEmp = require('./cust-emp-seeds');

const sequelize = require('../config/connection');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedCustomers();
  console.log('\n----- CUSTOMERS SEEDED -----\n');

  await seedEmployees();
  console.log('\n----- EMPLOYEES SEEDED -----\n');

  await seedCustEmp();
  console.log('\n----- CUSTOMER EMPLOYEES SEEDED -----\n');
  process.exit(0);
};

seedDatabase();
