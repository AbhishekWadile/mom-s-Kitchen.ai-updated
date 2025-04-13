const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BlogCateSchema = new Schema({
    category_name:{
        type:String,
        required:true,
    },
    path:{
        type:String,
        required:true,
    },
    filename:{
        type:String,
        required:true,
    }
})
const BlogCateModel = mongoose.model('BlogCate',BlogCateSchema)
module.exports=BlogCateModel