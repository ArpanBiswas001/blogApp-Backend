const express=require('express')
require('dotenv').config()
const dbConnect=require('./config/database')
const routes=require('./routes/routes')
const app=express()
const PORT=process.env.PORT || 4000
app.use(express.json())
app.use('/api/v1',routes)

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
})

dbConnect()

app.get('/',(req,res)=>{
    res.send(`<h1>HELLO THIS IS HOMEPAGE</h1>`)
})