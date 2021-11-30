const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
// CLUSTER 1
const app = express();
const pinRoute = require('./routes/pins');
const userRoute = require('./routes/users');

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('mongo connected');
  })
  .catch((err) => {
    console.log(err);
  });

app.use('/api/users', userRoute);
app.use('/api/pins', pinRoute);

app.listen(5000, () => {
  console.log(`listening on ${5000}`);
});
