const productModel = require('../models/productModel');

// Mengambil daftar semua produk
exports.getAllProducts = (req, res) => {
  res.json(productModel.getAll());
};

// Menambahkan produk baru
exports.createProduct = (req, res) => {
  const { name, price } = req.body;
  if (!name || typeof price !== 'number' || price <= 0) {
    return res.status(400).json({ error: 'Invalid product data' });
  }
  const newProduct = productModel.create(name, price);
  res.status(201).json(newProduct);
};

// Mengambil data produk berdasarkan ID
exports.getProductById = (req, res) => {
  const product = productModel.getById(parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.json(product);
};

// Menghapus produk berdasarkan ID
exports.deleteProductById = (req, res) => {
  const isDeleted = productModel.deleteById(parseInt(req.params.id));
  if (!isDeleted) {
    return res.status(404).json({ error: 'Product not found' });
  }
  res.status(204).end();
};
