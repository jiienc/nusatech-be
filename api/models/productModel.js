let products = [];
let currentId = 1;

// Mengambil daftar semua produk
exports.getAll = () => {
  return products;
};

// Menambahkan produk baru
exports.create = (name, price) => {
  const newProduct = { id: currentId++, name, price };
  products.push(newProduct);
  return newProduct;
};

// Mengambil data produk berdasarkan ID
exports.getById = (id) => {
  return products.find(p => p.id === id);
};

// Menghapus produk berdasarkan ID
exports.deleteById = (id) => {
  const index = products.findIndex(p => p.id === id);
  if (index === -1) {
    return false;
  }
  products.splice(index, 1);
  return true;
};
