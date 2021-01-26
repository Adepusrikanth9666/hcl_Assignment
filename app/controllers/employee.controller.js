const Employee = require('../models/employee.model')

exports.create = (req, res) => {
  console.log(req.body.employee)
  const employee = new Employee({
    name: req.body.name,
    salary:req.body.salary,
    address:req.body.address,
    permanent:req.body.permanent

  })
  employee.save()
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({
        message: err.message || 'Internal server error'
      })
    })
}

// fetching all the notes

exports.findAll = (req, res) => {
  Employee.find()
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({
        message: err.message || 'Internal server error'
      })
    })
}

// deleting a note

exports.delete = (req, res) => {
  Employee.findByIdAndRemove(req.params.employeeId)
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({
        message: err.message || 'Internal server error'
      })
    })
}

// updating a note

exports.update = (req, res) => {
  Employee.findByIdAndUpdate(req.params.employeeId, {
    employee: req.body.employee
  })
    .then(data => {
      res.send(data)
    }).catch(err => {
      res.status(500).send({
        message: err.message || 'Internal server error'
      })
    })
}