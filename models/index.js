const express = require('express');
const exphbs  = require('express-handlebars');
const mysql = require('mysql2');
const Sequelize = require('sequelize');
const session = require('express-session');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  });