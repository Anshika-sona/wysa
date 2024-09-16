const { Sequelize } = require('sequelize');

// Replace with your own PostgreSQL database credentials
const sequelize = new Sequelize('sleep_assessment_db', 'postgres', 'Sona17@game', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
