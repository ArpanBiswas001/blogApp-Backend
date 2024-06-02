const mongoose=require('mongoose')
const comment = require('./comment')

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    like:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Like'
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Comment'
    }]
})

module.exports=mongoose.model('Post',postSchema)