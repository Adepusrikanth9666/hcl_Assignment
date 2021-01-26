  
module.exports = (app) => {
    const employee = require('../controllers/employee.controller')
    // create a new employee
    app.post('/employee', employee.create)
    // fetching all the notes
    app.get('/employee', employee.findAll)
    // deleting a note
    app.delete('/employee/:employeeId', employee.delete)
    // updating a note
    app.put('/employee/:employeeId', employee.update)
  }