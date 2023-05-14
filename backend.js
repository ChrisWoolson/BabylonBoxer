const express = require('express');
const mongoose = require('mongoose');

const app = express();

const Boxer = require("./models/Boxer.js")

const db = mongoose.connection;
db.set('strictQuery', true)
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

mongoose.connect('mongodb://localhost:27017/babylon-boxer')
.then(() => console.log('mongo connected'))
.then(err => console.log(err))

app.get('/api/mydata', async (req, res) => {
  // Perform the MongoDB query and retrieve the desired data
  // Send the data back as a response
  try {
    const boxerValues = await Boxer.findOne({});
    res.json(boxerValues)
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
