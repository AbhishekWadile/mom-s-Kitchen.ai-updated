const express = require('express'); 
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../models/userModel');

router.post('/:id/:token',(req,res)=>{
    const {id,token}=req.params
    const password=req.body.password1
    console.log(password)
    
    jwt.verify(token,process.env.JWT_SECRET, async (err,decoded)=>{
        if(err){
            return res.json({Status:"Error with token"})
        }else{
            const new_pass = await bcrypt.hash(password,10)
            // .then(hash=>{
                UserModel.findByIdAndUpdate({_id:id},{$set:{password:new_pass}}).then(u=>res.send({Status:"Success"})).catch(err=>res.send({Status:err}))
            // })
            // .catch(err=>res.send({Status:err}))
        }
    })

})
module.exports=router;