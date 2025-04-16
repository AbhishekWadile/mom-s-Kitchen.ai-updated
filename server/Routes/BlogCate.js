const express = require('express'); 
const router = express.Router();
const multer = require('multer');
const BlogCateModel = require('../models/BlogCate')
const AllCateModel = require('../models/AllCate')
const PostsCommentsModel = require('../models/PostsComments')
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

//http://localhost:8080/allposts
router.get('/allposts/:category_name', async (req, res) => {
    try {
      const { category_name } = req.params;
      const allposts = await AllCateModel.find({category_name: category_name });
      res.status(200).json(allposts);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
});
  
router.put('/like/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const post = await AllCateModel.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.likes += 1;
        await post.save();
        res.status(200).json({ message: 'Post liked successfully', post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});

router.put('/dislike/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const post = await AllCateModel.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        post.dislikes += 1;
        await post.save();
        res.status(200).json({ message: 'Post disliked successfully', post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});

router.get('/getpost/:category_name/:id', async (req, res) => {
    try {
        const { category_name, id } = req.params;
        const post = await AllCateModel.findById(id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});

router.post('/comment/:post_id', async (req, res) => {
    try {
        const { post_id } = req.params;
        const { name, comment } = req.body;

        // console.log(post_id,name,comment)
        const newComment = new PostsCommentsModel({
            post_id,
            name,
            comment,
        });
        await newComment.save();
        res.status(200).json({ message: 'Comment added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
}
);

router.get('/comments/:post_id', async (req, res) => {
    try {
        const { post_id } = req.params;
        const comments = await PostsCommentsModel.find({ post_id });
        res.status(200).json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error });
    }
});

module.exports = router;