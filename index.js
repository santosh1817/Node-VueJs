const express = require('express')
const cors = require('cors')
const connectDB=require('./config/db')
const {mongoose}=require('./config/db')

const app=express()

const port =5000



//connectDB()

app.use(cors())

app.listen(port,function(){
    console.log('listening on port',port)
})

