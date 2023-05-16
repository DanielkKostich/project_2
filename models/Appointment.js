const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Appointment extends Model {}

Appointment.init(
    {
        aptid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        empid:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        cusid:{
            type:DataTypes.INTEGER,
            allowNull: false,
        },
        notes:{
            type:DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'appointment',
    }
);

module.exports = Appointment;