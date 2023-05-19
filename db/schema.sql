DROP DATABASE IF EXISTS salon_db;
CREATE DATABASE salon_db;

-- USE salon_db;

-- CREATE TABLE users (
--   id INT NOT NULL AUTO_INCREMENT,
--   email VARCHAR(255) NOT NULL,
--   password VARCHAR(255) NOT NULL,
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE customers (
--   id INT NOT NULL AUTO_INCREMENT,
--   first_name VARCHAR(255) NOT NULL,
--   last_name VARCHAR(255) NOT NULL,
--   phone_number VARCHAR(20),
--   email VARCHAR(255),
--   PRIMARY KEY (id)
-- );

-- CREATE TABLE appointments (
--   id INT NOT NULL AUTO_INCREMENT,
--   customer_id INT NOT NULL,
--   start_time DATETIME NOT NULL,
--   end_time DATETIME NOT NULL,
--   stylist VARCHAR(255) NOT NULL,
--   service VARCHAR(255) NOT NULL,
--   price DECIMAL(10, 2),
--   PRIMARY KEY (id),
--   FOREIGN KEY (customer_id) REFERENCES customers(id)
-- );
