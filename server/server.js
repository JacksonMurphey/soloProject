require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const app = express()
const port = 8000 // process.env.MY_PORT : commented out because had deployment issues because of this

//-- middleware -- 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

//-- Configuring Server for Cookies --
app.use(cookieParser())

//-- Requires config and routes --
require('./config/mongoose.config')
require('./routes/user.routes')(app)
require('./routes/expense.routes')(app)


app.listen(port, () => console.log(`Listening on Port: ${port}`))