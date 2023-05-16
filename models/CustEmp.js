const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class CustEmp extends Model {}

CustEmp.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'customer',
        key: 'cusid',
      },
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employee',
        key: 'empid',
      },
    },
    appointment_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'appointment',
        key: 'aptid'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cust_emp',
  }
);

module.exports = CustEmp;
