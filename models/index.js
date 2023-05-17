const Customer = require('./Customer');
const Employee = require('./Employee');
const Review = require('./Review')
const Appointment = require('./Appointment');

Customer.hasMany(Review, {
    foreignKey: 'customer_cusid',
    as: 'reviews',
  });
  
  Employee.hasMany(Review, {
    foreignKey: 'employee_empid',
    as: 'reviews',
  });

Review.belongsTo(Customer, {
    foreignKey: 'customer_cusid',
    as: 'customer',
  });
  
  Review.belongsTo(Employee, {
    foreignKey: 'employee_empid',
    as: 'employee',
  });

module.exports = { Customer, Employee, Review, Appointment };
