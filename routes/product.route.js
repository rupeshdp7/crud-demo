const express = require('express');
const router = express.Router();
const { addProduct, getAllProducts, getProduct, updateProduct, deleteProduct } = require('../controllers/product.controller');


router.get('/', getAllProducts);

router.get('/:id', getProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

router.post('/', addProduct);

module.exports = router;