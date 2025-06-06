
const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController.js');

// Routes for product operations

// Get all products
router.get('/', controller.getProducts);

// Add a new product
router.post('/', controller.addProduct);

// Get product by barcode
router.get('/barcode/:barcode', controller.getProductByBarcode);

// Update stock (increment or decrement)
router.put('/:id/stock', controller.updateStock);

// Stock In (Increase stock)
router.put('/:id/stockin', controller.stockIn);

// Stock Out (Decrease stock)
router.put('/:id/stockout', controller.stockOut);

// Update product details
router.put('/:id', controller.updateProduct);

// Delete product
router.delete('/:id', controller.deleteProduct);

module.exports = router;
