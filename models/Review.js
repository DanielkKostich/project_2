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
    
    customer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'customer',
        key: 'customer_id',
      },
    },
    employee_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'employee',
        key: 'employee_id',
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
