const mongoose = require('mongoose')

const MONGO_CONN = process.env.MONGO_CONN;

mongoose.connect(MONGO_CONN)
  .then(()=>{
    console.log('MongoDB is connected....G')
  }).catch((err)=>{
    console.log('Error while connecting with database:',err)
  })