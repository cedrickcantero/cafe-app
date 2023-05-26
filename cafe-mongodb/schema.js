// schema.js

const { Schema } = require('mongoose');

// Employee Schema
const employeeSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    match: /^UI[A-Za-z0-9]{7}$/
  },
  name: {
    type: String,
    required: true
  },
  email_address: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  },
  phone_number: {
    type: String,
    required: true,
    match: /^[89]\d{7}$/
  },
  gender: {
    type: String,
    required: true,
    enum: ['Male', 'Female']
  },
  cafe_id: {
    type: Schema.Types.ObjectId,
    ref: 'Cafe'
  },
  start_date: {
    type: Date,
    required: true
  }
});

// Cafe Schema
const cafeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  logo: String,
  location: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = {
  Employee: mongoose.model('Employee', employeeSchema),
  Cafe: mongoose.model('Cafe', cafeSchema)
};
