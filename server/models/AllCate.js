const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AllCateSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
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
    },
    text:{
        type:String,
        required:true,
    },
    short_desc:{
        type:String,
        required:true,
    },
    likes:{
        type:Number,
        default:0,
    },
    dislikes:{
        type:Number,
        default:0,
    },
    timedate:{
        type:Date,
        default:Date.now,
    }
})
const AllCateModel = mongoose.model('AllCate',AllCateSchema)
module.exports=AllCateModel