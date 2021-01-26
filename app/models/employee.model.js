const mongoose = require('mongoose')

const EmployeeSchema = mongoose.Schema({
  name: String,
  address: String,
  salary: Number,
  permanent: String,

}, {
  timestamps: true
})

module.exports = mongoose.model('Employee', EmployeeSchema)