const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET /products
router.get('/', productController.getAllProducts);

// POST /products
router.post('/', productController.createProduct);

// GET /products/:id
router.get('/:id', productController.getProductById);

// DELETE /products/:id
router.delete('/:id', productController.deleteProductById);

module.exports = router;
