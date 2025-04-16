const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const PostsCommentsSchema = new Schema({
    post_id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
        required:true,
    },
    commenttimedate:{
        type:Date,
        default:Date.now,
    }
})
const PostsCommentsModel = mongoose.model('PostsComments',PostsCommentsSchema)
module.exports=PostsCommentsModel
