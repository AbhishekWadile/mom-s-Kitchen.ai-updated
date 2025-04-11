const express = require('express'); 
const router = express.Router();
const Chefs = require("../models/chefs")
const NonVegChefs = require("../models/Nonvegchefs")

//http://localhost:8080/invitechef/getAllChefs
router.get('/getAllChefs',async(req,res)=>{
    try{
        const chefs = await Chefs.find()
        res.json(chefs)
    }catch(error){
        res.status(500).json({'error':error})
    }
})

//http://localhost:8080/invitechef/getAllNonVegChefs
router.get('/getAllNonVegChefs',async(req,res)=>{
    try{
        const chefs = await NonVegChefs.find()
        res.json(chefs)
    }catch(error){
        res.status(500).json({'error':error})
    }
})

//http://localhost:8080/invitechef/postChef
router.post('/postChef',async(req,res)=>{
    try{
        const chefs = new Chefs({
            Chef_id:req.body.Chef_id,
            Chef_name:req.body.Chef_name,
            Chef_description:req.body.Chef_description,
            Chef_information:req.body.Chef_information,
            Chef_rating:req.body.Chef_rating,
            Chef_review:req.body.Chef_review,
            Chef_img:req.body.Chef_img,
            Chef_docs:req.body.Chef_docs,
            Chef_location:req.body.Chef_location,
            Chef_availability:req.body.Chef_availability,
            Chef_experience:req.body.Chef_experience
        })

        const chef = await chefs.save()
        res.json(chef)
        
    }catch(error){
        console.log(error)
        res.status(500).json({"error": error})
    }
})

//http://localhost:8080/invitechef/postNonvegChef
router.post('/postNonvegChef',async(req,res)=>{
    try{
        const chefs = new NonVegChefs({
            Chef_id:req.body.Chef_id,
            Chef_name:req.body.Chef_name,
            Chef_description:req.body.Chef_description,
            Chef_information:req.body.Chef_information,
            Chef_rating:req.body.Chef_rating,
            Chef_review:req.body.Chef_review,
            Chef_img:req.body.Chef_img,
            Chef_docs:req.body.Chef_docs,
            Chef_location:req.body.Chef_location,
            Chef_availability:req.body.Chef_availability,
            Chef_experience:req.body.Chef_experience,
            Chef_tag:req.body.Chef_tag
        })

        const chef = await chefs.save()
        res.json(chef)
        
    }catch(error){
        console.log(error)
        res.status(500).json({"error": error})
    }
})

module.exports=router