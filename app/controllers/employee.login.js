const Employee = require('../models/employee.login')

exports.create = (req, res) => {
  console.log(req.body.employee)
  const employee = new Employee({
    name: req.body.name,
   password:req.body.password

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


