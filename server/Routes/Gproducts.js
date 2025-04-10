const express = require('express'); 
const router = express.Router();
const ProductModel = require("../models/Products");
router.post('/postProduct',async (req,res)=>{
    try{
        const products = new ProductModel({
            product_id:req.body.product_id,
            product_name:req.body.product_name,
            product_price:req.body.product_price,
            category:req.body.category,
            stock:req.body.stock,
            image:req.body.image
        })

        const product = await products.save()
        res.json(product)

    }catch(error){
        res.status(500).json({'error':error})
    }
})

router.get('/getAllProducts',async(req,res)=>{
    const category = req.query.category
    console.log(category)
    try{
        if(category){
            const products = await ProductModel.find({category:category})
            res.json(products)
        }else{
            const products = await ProductModel.find()
            res.json(products)
        }
    }catch(error){
        res.status(500).json({'error':error})
    }
})
// router.get('/getSearchProducts',async(req,res)=>{
//     const category = req.query.category
//     console.log(category)
//     try{
//         const products = await ProductModel.find({category:category})
//         res.json({products,sts:true})
//     }catch(error){
//         res.status(500).json({'error':error})
//     }
// })

module.exports = router;