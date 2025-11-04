const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated')
})

mongoose
  .connect(
    'mongodb+srv://dalarcoinmusic_db_user:EJKGrHCe1cbH7Uax@globifye.rgejhjw.mongodb.net/?appName=GlobiFYE'
  )
  .then(() => {
    console.log('Connected to database!')
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch(() => {
    console.log('Connection failed!')
  })
