const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
// CLUSTER 1 - Mongodb
const app = express();
const pinRoute = require('./routes/pins');
const userRoute = require('./routes/users');

const cors = require('cors');
app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;

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
  console.log(`listening on ${PORT}`);
  console.log('port', PORT);
});
