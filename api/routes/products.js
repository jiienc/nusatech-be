const express = require('express');
const router = express.Router();

let products = [];

// Middleware
const validateProduct = (req, res, next) => {
  const { name, price } = req.body;
  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Name is required and must be a non-empty string.' });
  }
  if (typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Price must be a positive number.' });
  }
  next();
};

// GET /products
router.get('/', (req, res) => {
  res.json(products);
});

// POST /products
router.post('/', validateProduct, (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// GET /products/:id
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found.' });
  }
  res.json(product);
});

// DELETE /products/:id
router.delete('/:id', (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found.' });
  }
  products.splice(productIndex, 1);
  res.status(204).end();
});

module.exports = router;
