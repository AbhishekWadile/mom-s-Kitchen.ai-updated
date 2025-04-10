const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    product_id:{
        type:Number,
        required:true,
    },
    product_name:{
        type:String,
        required:true,
    },
    product_price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    stock:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const ProductModel = mongoose.model('products',ProductSchema)
module.exports=ProductModel