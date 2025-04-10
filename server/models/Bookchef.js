const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const BookchefSchema = new Schema({ 
    Chef_id:{
        type:String,
        required:true,
    },
    chId:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    }
})

const BookchefModel = mongoose.model('Bookchef',BookchefSchema)
module.exports=BookchefModel