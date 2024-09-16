const sequelize = require('../sequelize');
const User = require('./User');
const Question = require('./Question');

// Define associations
User.hasMany(Question);
Question.belongsTo(User);

// Sync the database
sequelize.sync({ alter: true })
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch(err => {
    console.error("Error creating database tables:", err);
  });

module.exports = { User, Question };
