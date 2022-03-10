const mongoose = require('mongoose')
const dbName = 'projectDB' // process.env.DB_NAME

mongoose.connect('mongodb://localhost/' + dbName, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`Established connection to database: ${dbName}`))
    .catch(err => console.log('Error occured while connecting to the DB', err))