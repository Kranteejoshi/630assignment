const {Router} = require('express')
const UserRoute = Router()
UserRoute.get('/users', (req, res) => {
    //fetch users details from database
    res.send(['uma', 'krishna', 'hari'])
  })

  UserRoute.post('/users', (req, res) => {
    //send users details to database
    res.send(['uma', 'krishna', 'hari'])
  })

  UserRoute.put('/users', (req, res) => {
    //update users details from database
    res.send(['uma', 'krishna', 'hari'])
  })

  UserRoute.delete('/users', (req, res) => {
    //delete users details from database
    res.send(['uma', 'krishna', 'hari'])
  })


  module.exports = UserRoute;