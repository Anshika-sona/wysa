const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('sleep_assessment_db', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = sequelize;
