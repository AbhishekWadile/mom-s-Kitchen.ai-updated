const UserModel = require('../models/userModel');
const {oauth2client} = require('../utils/googleConfig')
require('dotenv').config();
const axios = require('axios')
const jwt = require('jsonwebtoken')

const googleLogin = async (req,res)=>{
    // console.log(req.query)
    try{
        // console.log('this is try')
        const { code } = req.query;
        // console.log(code)
        const googleRes = await oauth2client.getToken(code);
        // console.log(googleRes)
        oauth2client.setCredentials(googleRes.tokens)
        // console.log(googleRes.tokens.access_token)
        const tok=googleRes.tokens.access_token
        // console.log(tok)
        const userRes = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tok}`
        )
        // console.log(userRes.data)
        const {email,name,picture}=userRes.data;
        let user = await UserModel.findOne({email})
        if(!user){
            user = await UserModel.create({
                name,email,image:picture
            })
        }
        const { _id} = user;
        const token = jwt.sign({ _id,email},
            process.env.JWT_SECRET,
            {
                expiresIn:process.env.JWT_TIMEOUT
            }
        )
        return res.status(200).json({
            message:'Success',
            token,
            user,
            name:user.name
        })
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:'Internal server error'
        })
    }
}

const Gusers=async(req,res)=>{
    try{
        const users = await UserModel.find()
        res.json(users)
    }catch(error){
        res.status(500).json({'error':error})
    }
}

module.exports = {
    googleLogin,
    Gusers
}     
