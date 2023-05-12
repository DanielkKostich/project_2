const Customer = require('./Customer');
const Employee = require('./Employee');
const CustEmp = require('./CustEmp')

Customer.belongsToMany(Employee, {
    through: 'cust_emp'
})

Employee.belongsToMany(Customer, {
    through: 'cust_emp',
})

module.exports = { Customer, Employee, CustEmp };
