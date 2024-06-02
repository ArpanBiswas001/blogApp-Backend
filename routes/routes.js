const express=require('express')

const route=express.Router()

const {dummy}=require('../controller/dummy')
const {comment}=require('../controller/comment')
const {post,getAllpost}=require('../controller/post')
const {like,unlikePost}=require('../controller/like')
route.get('/dummy',dummy)

route.post('/comments/create',comment)
route.post('/post/create',post)
route.get('/post/all',getAllpost)
route.post('/post/like',like)
route.post('/post/unlike',unlikePost)
module.exports=route