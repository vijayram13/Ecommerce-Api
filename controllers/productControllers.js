// call the model of the database
const Product = require('../models/product');

// API to add products to the database
exports.createProduct = async (req, res) => {
  try {
    const {name, quantity } = req.body;
    const count = await Product.count({});
    console.log(count);
    const id = count+1;
    const product = await Product.create({id, name, quantity });
    res.json({ data: { product } });
  } catch (err) {
    
    res.status(500).json({ error: 'Failed to add product' });
    
  }
};

// API to list products
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    
    res.json({ data: { products } });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

// API to delete products
exports.deleteProduct = async (req, res) => {
  try {
    
    const { id } = req.params;
    await Product.findOneAndDelete({id:id});

    res.json({ data: { message: 'Product deleted' } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};

// API to update quantity of a product
exports.updateProductQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.query;
    
    const product = await Product.findOne({id:id});
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    const newQuantity = product.quantity + parseInt(number);
    product.quantity = newQuantity;
    await product.save();
    res.json({ data: { product }, message: 'Updated successfully' });
  } catch (err) {
    
    res.status(500).json({ error: 'Failed to update product quantity' });
  }
};
