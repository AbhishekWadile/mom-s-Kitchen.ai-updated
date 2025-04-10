const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentsSchema = new Schema({
    chef_id:{
        type:String,
        required:true
    },
    chID:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }
})

const CommentsModel = mongoose.model('Comments',CommentsSchema)
module.exports=CommentsModel