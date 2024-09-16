const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');  // Reference to your sequelize connection

// Define the Question model
const Question = sequelize.define('Question', {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  answer: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = Question;
