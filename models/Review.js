const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model {}

Review.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    },
    review: {
      type: DataTypes.STRING,
    },
    sentence:{
      type: DataTypes.STRING,
    },
    
    customer_cusid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'customer',
        key: 'cusid',
      },
    },
    employee_empid: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employee',
        key: 'empid',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'review',
  }
);

module.exports = Review;
