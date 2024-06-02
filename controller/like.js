const Post=require('../models/post')
const Like=require('../models/like')

exports.like=async(req,res)=>{
    try {
        const {post,user}=req.body

        const newLike=new Like({post,user})

        const saveLike= await newLike.save()

        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{like:saveLike._id}},{new:true})

        res.status(200).json({
            updatedPost
        })
    } catch (error) {
        return res.status(500).json({
            post:'not updated'
        })
    }
}
exports.unlikePost=async(req,res)=>{
    try {
        const {post,like}=req.body

        const deleteLike= await Like.findOneAndDelete({post:post,_id:like})

        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{like:deleteLike._id}},{new:true})

        res.status(200).json({
            updatedPost
        })
    } catch (error) {
        return res.status(500).json({
            post:'not updated'
        })
    }
}