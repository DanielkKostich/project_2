const Customer = require('./Customer');
const Employee = require('./Employee');
const Appointment = require('./Appointment')

Customer.belongsToMany(Employee, {
    through: 'appointment'
})

Employee.belongsToMany(Customer, {
    through: 'appointment',
})

module.exports = { Customer, Employee, Appointment };