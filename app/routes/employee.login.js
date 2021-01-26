module.exports = (app) => {
    const employee = require('../controllers/employee.login')
    // create a new employee
    app.post('/login', employee.create)
    // fetching 
    app.get('/login', employee.findAll)
    
}