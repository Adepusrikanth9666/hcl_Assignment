const mongoose = require('mongoose')

const EmployeeLoginSchema = mongoose.Schema({
  name: String,
  password:String

}, {
  timestamps: true
})

module.exports = mongoose.model('Login', EmployeeLoginSchema)