const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express();
const port = 4000




app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cors());

const dbConfig = require('./config/database.config.js')


mongoose.Promise = global.Promise


mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
  }).then(() => {
    console.log('Successfully connected to database')
  }).catch(err => {
    console.log('Database error', err)
    process.exit()
  })
  

  app.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
  })
  

  require('./app/routes/employee.route')(app)

  require('./app/routes/employee.login')(app)
  
  app.listen('4000', () => {
    console.log('Server listening at 4000')
  })



// app.use("/employees",require('./routes/employee'))

