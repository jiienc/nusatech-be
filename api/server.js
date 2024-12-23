const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const productRoutes = require('./routes/productRoutes');

app.use(bodyParser.json());

app.use('/products', productRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
