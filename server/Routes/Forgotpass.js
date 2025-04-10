const express = require('express'); 
const router = express.Router();
const UserModel = require("../Models/user");
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

router.post('/',async (req,res)=>{
    const email = req.body.email1;
    console.log(email)
    await UserModel.findOne({email:email})
    .then(user=>{
        if(!user){
            return res.send({Status:"User not found",code:true})
        }
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_TIMEOUT})
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'wadile.abhishek7@gmail.com',
              pass: 'pxrgpwkrqlyfrafu'
            }
          });
          
          var mailOptions = {
            from: "MOM'S KITCHEN.AI",
            to: email,
            subject: 'Reset your password',
            text: `http://localhost:5173/reset_password/${user._id}/${token}`
          };
          
          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              console.log(error);
            } else {
              return res.send({Status:"Success",message:"Your Renew password link sended on respective email"})
            }
          });
    })
})
module.exports=router;