const express = require('express')
const app = express()
var cors = require('cors')
require('./db/mongoose')
 
// Middlewares
app.use(cors())
app.use(express.json())
const postRoute = require('./routes/postRoute')
const userRoute = require('./routes/userRoute')

// Routes...
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/api/users/', userRoute)
app.use('/api/posts/', postRoute)
const port = 7000
 
app.listen(port, ()=> {
    console.log('app running on port: ' + port)
})