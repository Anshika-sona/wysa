const express = require('express');
const { User, Question } = require('./models');  // Import the models

const app = express();
app.use(express.json());

// Basic routes
app.post('/users', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.create({ username, email, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post('/questions', async (req, res) => {
  const { text, answer, userId } = req.body;
  try {
    const question = await Question.create({ text, answer, UserId: userId });
    res.status(201).json(question);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
