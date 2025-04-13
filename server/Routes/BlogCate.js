const express = require('express'); 
const router = express.Router();
const multer = require('multer');
const BlogCateModel = require('../models/BlogCate')
const AllCateModel = require('../models/AllCate')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, Date.now() + "_" + file.originalname)
    }
})
const upload = multer({ storage})

router.post('/upload', upload.single('imageFile'), async(req, res) => {
    try{
        const {category_name} = req.body
        const path = req.file.path
        const file = req.file.filename
        const blogcate = new BlogCateModel({
            category_name,
            path,
            filename:file
        })
        await blogcate.save()
        res.status(200).json({"Status":"Success"})
    }catch(error){
        console.log(error)
        res.status(500).json({"error": error})
    }
})

router.get('/categories', async (req, res) => {
    try {
      const categories = await BlogCateModel.find();
      res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
});


//http://localhost:8080/uploadPost
router.post('/uploadPost', upload.single('imageFile'), async(req, res) => {
    try{
        const {name,title,category_name,text,short_desc,likes,dislikes} = req.body
        const path = req.file.path
        const file = req.file.filename
        const allcate = new AllCateModel({
            name,
            title,
            category_name,
            path,
            filename:file,
            text,
            short_desc,
            likes,
            dislikes
        })
        await allcate.save()
        res.status(200).json({"Status":"Success"})
    }catch(error){
        console.log(error)
        res.status(500).json({"error": error})
    }
})
  
module.exports = router;