const express = require('express') //commonjs
const UserRoute = require('./routes/users')

const app = express()

const port = 8000
app.use(UserRoute)

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/samajikDb');

const User = mongoose.model('User', { name: String, age: Number, isPremiumSubscriber : Boolean });
User.create({name: "Munu", age: 28, isPremiumSubscriber: true})


app.listen(port, () => {
  console.log("Server is started in port" + port)
})