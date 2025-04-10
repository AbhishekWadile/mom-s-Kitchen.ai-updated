const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ChefSchema = new Schema({
    Chef_id:{
        type:Number,
        required:true,
    },
    Chef_name:{
        type:String,
        required:true,
    },
    Chef_description:{
        type:String,
        required:true
    },
    Chef_information:{
        type:String,
        required:true
    },
    Chef_rating:{
        type:Number,
        required:true
    },
    Chef_review:{
        type:Number,
        required:true
    },
    Chef_img:{
        type:String,
        required:true
    },
    Chef_docs:{
        type:String,
        required:true
    },
    Chef_location:{
        type:String,
        required:true
    },
    Chef_availability:{
        type:String,
        required:true
    },
    Chef_experience:{
        type:Number,
        required:true
    }
})


const ChefModel = mongoose.model('ChefInfo',ChefSchema)
module.exports=ChefModel