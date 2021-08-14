const path = require('path');
const morgan = require('morgan');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
//environment variable
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
//const port = process.env.PORT || 80;

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
const heroRouter = require('./routes/index');

app.use('/users', usersRouter);
app.use('/hero', heroRouter);


if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});