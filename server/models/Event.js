/*
 |--------------------------------------
 | Event Model
 |--------------------------------------
 */
const mongoose = require('mongoose');
// FIX promise deprecation warning:
// https://github.com/Automattic/mongoose/issues/4291
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  startDatetime: {
    type: Date,
    required: true
  },
  endDatetime: {
    type: Date,
    required: true
  },
  description: String,
  viewPublic: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Event', eventSchema);
