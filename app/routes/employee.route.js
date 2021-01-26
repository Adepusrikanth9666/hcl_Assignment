  
module.exports = (app) => {
    const employee = require('../controllers/employee.controller')
    // create a new employee
    app.post('/employee', employee.create)
    // fetching 
    app.get('/employee', employee.findAll)
    // deleting 
    app.delete('/employee/:employeeId', employee.delete)
    // updating 
    app.put('/employee/:employeeId', employee.update)
  }