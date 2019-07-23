const router = require('express').Router();
const verify = require('./verifyToken');
const Product = require('../models/Product');
const {productValidation} = require('../validation');

//Get all products
router.get('/get-products', verify, async (req, res) => {
    
    const products = await Product.find();

    res.status(200).json({products:products});
    
});
//Get product my userid
router.get('/get-my-products/:id', verify, async (req, res) => {
    const id = req.params.id;
    const products = await Product.find({userid:id});

    res.status(200).json({products:products});
    
});
//Get a product
router.get('/get-product/:id', verify, async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);

    res.status(200).json({product:product});
    
});
//Add product
router.post('/add-product', verify, async (req, res) => {
    //Validation
    const {error} = productValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    //Creating new product
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        userid: req.user.__id
    });
    try {
        const savedProduct = await product.save();
        res.send({ product:product._id} );
    } catch (err) {
        res.status(400).send(err);
    }

});
//Delete product
router.get('/delete/:id', verify, async (req, res, next) => {
    const id = req.params.id;
    
    await Product.findByIdAndDelete(id, (err)=>{
        if(err){
            console.log('Error deleting');
            console.log(err)
        }else{
            console.log('Deleted user!');
        }

    });
    res.send('Product deleted!');
});

//Update product
router.post('/update/:id', verify, async (req, res) => {
    const id = req.params.id;
    const product = await Product.findById(id);
    const {name, description} = req.body;
    const updatedProduct = {};
    if(description){
        updatedProduct.description = description;
    }

    if(name){
        updatedProduct.name = name;
    }

    const updateProduct = await Product.updateOne({_id:id}, updatedProduct);
    if(!updateProduct){
        return res.status(400).send('Error updating!');
    }

    return res.status(200).send('data updated');
    
});

module.exports = router;

