const express = require('express');
const router = express.Router();
const Chefs = require("../models/chefs")
const chef_comments = require("../models/Comments_model")
const NonVegChefs = require("../models/Nonvegchefs")

//http://localhost:8080/invitechef/oneChefInfo/:_id/:Chef_id
router.get("/oneChefInfo/:_id/:Chef_id",async(req,res)=>{
    const {id,Chef_id} = req.params;
    console.log(id)
    try{
        const chefs = await Chefs.findOne({id,Chef_id}) || await NonVegChefs.findOne({id,Chef_id})
        res.json(chefs)
        console.log(chefs)
    }catch(error){
        console.log(error)
        res.status(500).json({'error':error})
    }
})

//For the Comments 
//http://localhost:8080/invitechef/oneChefInfo/:_id/:Chef_id
router.post("/comment/:_id/:Chef_id",async(req,res)=>{
    const {id,Chef_id} = req.params;
    console.log(id)
    try{
        const chefs = await Chefs.findOne({id,Chef_id}) || await NonVegChefs.findOne({id,Chef_id})
        if(chefs){
            const {chef_id,chID,name,comment} = req.body;
            const newComment = new chef_comments({
                chef_id:chef_id,
                chID:chID,
                name,
                comment
            })
            await newComment.save()
            res.json(newComment)
        }
        // res.json(chefs)
        // console.log(chefs)
    }catch(error){
        console.log(error)
        res.status(500).json({'error':error})
    }
})


//http://localhost:8080/invitechef/getCommnets/:_id/:Chef_id
router.get("/getComments/:_id",async(req,res)=>{
    const {_id} = req.params;
    // console.log(chef_id)
    // console.log(id)
    try{
        const chefs = await chef_comments.find({chef_id:_id}) 
        res.json(chefs)
        // console.log(chefs)
    }catch(error){
        console.log(error)
        res.status(500).json({'error':error})
    }
})

router.get("/oneNonvgChefInfo/:_id/:Chef_id",async(req,res)=>{
    const {id,Chef_id} = req.params;
    console.log(id)
    try{
        const chefs = await NonVegChefs.findOne({id,Chef_id})
        res.json(chefs)
        console.log(chefs)
    }catch(error){
        console.log(error)
        res.status(500).json({'error':error})
    }
})

//For the Comments 
//http://localhost:8080/invitechef/oneChefInfo/:_id/:Chef_id
router.post("/comment/:_id/:Chef_id",async(req,res)=>{
    const {id,Chef_id} = req.params;
    console.log(id)
    try{
        const chefs = await NonVegChefs.findOne({id,Chef_id})
        if(chefs){
            const {chef_id,chID,name,comment} = req.body;
            const newComment = new chef_comments({
                chef_id:chef_id,
                chID:chID,
                name,
                comment
            })
            await newComment.save()
            res.json(newComment)
        }
        // res.json(chefs)
        // console.log(chefs)
    }catch(error){
        console.log(error)
        res.status(500).json({'error':error})
    }
})



module.exports=router;
