const { Sequelize } = require('sequelize');

// Replace with your own PostgreSQL database credentials
const sequelize = new Sequelize('sleep_assessment_db', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
