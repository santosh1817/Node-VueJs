const express = require('express')
const cors = require('cors')
const connectDB=require('./config/db')
const {mongoose}=require('./config/db')
const {routes}=require('./config/routes')

const app=express()

const port =5000



//connectDB()
app.use(express.json())
app.use(cors())

app.use('/',routes)


app.listen(port,function(){
    console.log('listening on port',port)
})



