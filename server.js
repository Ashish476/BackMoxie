const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyparser = require('body-parser')


const CustomerRoute = require('./routes/customer')

mongoose.connect('mongodb://localhost:27017/Moxie',{useNewUrlParser:true,useUnifiedTopology:true})
const db =mongoose.connection

db.on('error',(err)=>{
    console.log(err)
})

db.once('open',()=>{
    console.log('Database connected')
})

const app = express()
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use('/uploads',express.static('uploads'))

const PORT =process.env.PORT || 8000

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})


app.use('/api/customer',CustomerRoute)