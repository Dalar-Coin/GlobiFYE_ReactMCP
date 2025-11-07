const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter your email'],
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('Users', UserSchema)

module.exports = User
