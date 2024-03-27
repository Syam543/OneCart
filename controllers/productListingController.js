const Product = require('../models/productModel');

const listProduct = async(req, res) => {
 try {
    const products = await Product.find();
    res.render('home',{products})
 } catch (error) {
    console.log(error);
    res.status(500).send('Server internal Error');
 }   
};

module.exports = {
    listProduct
};