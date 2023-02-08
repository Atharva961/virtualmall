const connectToMongo = require("./db");

connectToMongo();
const express = require('express')
// const app = express()
const port = 5000
var app = express()
var cors = require('cors')
var app = express()
 
app.use(cors())
 

app.use(express.json());

//Available routes
app.use('/apis/auth', require('./routes/auth'))
app.use('/apis/product', require('./routes/product'))

app.listen(port, () => {
  console.log(`virtualmall backend listening at http://localhost:${port}`)
})