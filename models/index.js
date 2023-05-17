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
