const Customer = require('./Customer');
const Employee = require('./Employee');
const Review = require('./Review')
const Appointment = require('./Appointment');

Customer.hasMany(Review, {
  foreignKey: 'customer_id',
  as: 'reviews',
});

Employee.hasMany(Review, {
  foreignKey: 'employee_id',
  as: 'reviews',
});

Customer.belongsToMany(Employee, {
    through: 'appointment'
})

Review.belongsTo(Customer, {
  foreignKey: 'customer_id',
  as: 'customer',
});
  
Review.belongsTo(Employee, {
  foreignKey: 'employee_id',
  as: 'employee',
});

Employee.belongsToMany(Customer, {
    through: 'appointment',
})
module.exports = { Customer, Employee, Review, Appointment };