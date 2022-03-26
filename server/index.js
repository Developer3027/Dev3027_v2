const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log('mongo connected'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use('/api/auth', authRoute);

app.use('/', (req, res) => {
  console.log('main url')
})

app.listen('5000', () => {
  console.log('running')
})