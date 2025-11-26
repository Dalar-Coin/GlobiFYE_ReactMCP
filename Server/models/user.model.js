const mongoose = require('mongoose')

const UserSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please enter a valid email'],
    },

    password: {
      type: String,
      required: [true, 'Please enter your password'],
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('Users', UserSchema)

module.exports = User
