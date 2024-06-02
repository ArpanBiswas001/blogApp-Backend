const mongoose=require('mongoose')
require('dotenv').config()
const dbConnect=()=>{
    
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log('sever is running')
    })
    .catch((error)=>{
        console.log('server error');
        console.error()
        process.exit(1)
    })
}

module.exports=dbConnect