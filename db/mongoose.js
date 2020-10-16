const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://george:<password>@cluster0.vtkcj.mongodb.net/blog?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, ()=> {
    console.log('database connection: successfull!')
})