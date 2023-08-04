// to manage the mongoDB Database
const mongoose = require('mongoose');
// schema for the Database
const productSchema = new mongoose.Schema({
    id: {type: Number,required: true ,unique: true},
    name: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
},{timestamps: true});
// create model and collection for the database
const Product = mongoose.model('product', productSchema);
// console.log("Product schema Created");

// exports model
module.exports = Product;