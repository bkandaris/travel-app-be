const mongoose = require('mongoose');

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      required: true,
      max: 3,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
      min: 3,
    },
    rating: {
      type: String,
      required: true,
      min: 3,
      max: 10,
    },
    lat: {
      type: Number,
      required: true,
    },
    long: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Pins', PinSchema);
