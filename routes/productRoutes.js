const express = require('express');
// router
const router = express.Router();
// call controllers for the routes
const productController = require('../controllers/productControllers');
// create products
router.post('/create', productController.createProduct);
// list all products
router.get('/', productController.listProducts);
// delete products by id
router.delete('/:id', productController.deleteProduct);
// update products data by id
router.post('/:id/update_quantity', productController.updateProductQuantity);

// export router
module.exports = router;
