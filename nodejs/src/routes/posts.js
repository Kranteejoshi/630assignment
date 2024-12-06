const {Router} = require('express')
const PostRoute = Router()
PostRoute.get('/posts', (req, res) => {
    //fetch posts details from database
    res.send(['uma', 'krishna', 'hari'])
  })

  PostRoute.post('/posts', (req, res) => {
    //send posts details to database
    res.send(['uma', 'krishna', 'hari'])
  })

  PostRoute.put('/posts', (req, res) => {
    //update posts details from database
    res.send(['uma', 'krishna', 'hari'])
  })

  PostRoute.delete('/posts', (req, res) => {
    //delete posts details from database
    res.send(['uma', 'krishna', 'hari'])
  })


  module.exports = PostRoute;