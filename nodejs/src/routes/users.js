
const {Router} = require('express')
// const UserRoute = Router()
// UserRoute.get('/users', (req, res) => {
//     //fetch users details from database
//     res.send(['uma', 'krishna', 'hari'])
//   })

//   UserRoute.post('/users', (req, res) => {
//     //send users details to database
//     res.send(['uma', 'krishna', 'hari'])
//   })

//   UserRoute.put('/users', (req, res) => {
//     //update users details from database
//     res.send(['uma', 'krishna', 'hari'])
//   })

//   UserRoute.delete('/users', (req, res) => {
//     //delete users details from database
//     res.send(['uma', 'krishna', 'hari'])
//   })

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/samajikDb');

const User = mongoose.model('User', { 
    fullName: String,
    email: String,
    gender: {
      type: String,
      enum : ['Male', 'Female', 'Other'],
      default: 'Male'
    },
    dateOfBirth: String,
    password: String,
    phoneNumber: String
  });


const UserRoute = Router()
UserRoute.post('/register', (req, res) => {
  User.create(req.body)
  res.send("user created!!")
})

UserRoute.get('/users', async(req, res) => {
  const data = await User.find()
  res.send(data)
})


  module.exports = UserRoute;