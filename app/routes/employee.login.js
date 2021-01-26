module.exports = (app) => {
    const employee = require('../controllers/employee.login')
    // create a new employee
    app.post('/login', employee.create)
    // fetching all the notes
    app.get('/login', employee.findAll)
    
}