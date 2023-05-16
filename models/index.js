<<<<<<< HEAD
const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT
});

module.exports = sequelize;
=======
const Customer = require('./Customer');
const Employee = require('./Employee');
const Review = require('./Review')
const Appointment = require('./Appointment');

Customer.belongsToMany(Employee, {
    through: 'review'
})

Employee.belongsToMany(Customer, {
    through: 'review',
})

module.exports = { Customer, Employee, Review, Appointment };
>>>>>>> 0488c9dab69f35323710a7e99decaf5650360419
