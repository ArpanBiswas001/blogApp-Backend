const Post=require('../models/post')

exports.post=async(req,res)=>{
    try {
        const {title,description}=req.body

        const newPost=new Post({title,description})

        const savePost=await newPost.save()
        res.status(200).json({
            post:'updated'
        })
    } catch (error) {
        return res.status(500).json({
            post:'not updated'
        })
    }
}
exports.getAllpost=async(req,res)=>{
    try {
        const postAll=await Post.find().populate('comment').exec()

        res.status(200).json({
            postAll
        })
    } catch (error) {
        return res.status(500).json({
            post:'not updated'
        })
    }
}