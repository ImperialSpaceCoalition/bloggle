// Dependencies
const Sequelize = require('sequelize');

// Load environment variables
require('dotenv').config();

// Create connection to database
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
    });

// Export sequelize connection
module.exports = sequelize;
