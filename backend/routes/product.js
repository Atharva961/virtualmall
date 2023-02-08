const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

//GET ALL THE AVAILABLE PRODUCTS IN DATABASE
router.get('/getproducts', async(req, res)=>{
    try
    {
        let products = await Product.find();
        res.json(products);
    }
    catch(error)
    {
        res.status(500).send("Internal Server Error");
        console.error(error);
    }
});

module.exports = router;