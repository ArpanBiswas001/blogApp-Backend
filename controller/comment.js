const Post=require('../models/post')
const Comment=require('../models/comment')

exports.comment=async(req,res)=>{
    try {
        const {post,user,body}=req.body

        const newComment=new Comment({post,user,body})

        const saveComment= await newComment.save()

        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comment:saveComment._id}},{new:true})

        res.status(200).json({
            post:'updated'
        })
    } catch (error) {
        return res.status(500).json({
            post:'not updated'
        })
    }
}