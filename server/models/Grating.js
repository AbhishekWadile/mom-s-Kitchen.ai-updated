const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const GroceryRatingSchema = new Schema({
    Rat_email:{
        type:String,
        required:true
    },
    Rat_img:{
        type:String,
        required:true
    },
    Rat_name:{
        type:String,
        required:true
    },
    Rat:{
        type:Number,
        required:true
    },
    Rat_info:{
        type:String,
        required:true
    },
    Rat_extrainfo:{
        type:String,
        required:true
    }
})
const GroceryRatingModel = mongoose.model('G_rating',GroceryRatingSchema)
module.exports=GroceryRatingModel