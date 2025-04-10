const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require("../Models/user");

const signup = async (req,res)=>{
    try{
      const {name,email,password}=req.body;
      const user = await UserModel.findOne({email});
      if(user){
        return res.status(409).json({message:"User already exist, you can login",success:false})
      }
      const userModel = new UserModel({name,email,password})
      userModel.password = await bcrypt.hash(password,10)
      await userModel.save();
      res.status(201)
        .json({
            message:"Signup successfully",
            success:true
        })
    }catch(err){
        res.status(500).json({
            message:"internal server error",
            success:false
          })
    }
}
const login = async (req,res)=>{ 
    try{
      const {email,password}=req.body;
      const user = await UserModel.findOne({email});
      const errorMessage = "Authentication failed email or password is wrong";
      if(!user){
        return res.status(403).json({message:errorMessage,success:false})
      }
      const isPassEqual = await bcrypt.compare(password,user.password);
      if(!isPassEqual){
        return res.status(403)
            .json({message:errorMessage,success:false})
      }
      const jwtToken = jwt.sign(
        {email:user.email, _id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:process.env.JWT_TIMEOUT}
      )
      res.status(200)
        .json({
            message:"Login success",
            success:true,
            jwtToken,
            email,
            name:user.name
        })
    }catch(err){
        res.status(500).json({
            message:"internal server error",
            success:false
          })
    }
}

const users=async(req,res)=>{
    try{
        const users = await UserModel.find()
        res.json(users)
    }catch(error){
        res.status(500).json({'error':error})
    }
}



module.exports = {
    signup,
    login,
    users
}