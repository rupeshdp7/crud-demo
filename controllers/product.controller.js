const Product = require('../models/product.model.js');

const addProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).send(product)
    } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
        return 1;
    }
    res.send(req.body)
}
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).send(products)
    } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
        return 1;
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).send('Product not found')
        }
        res.status(200).send(product)
    } catch (error) {
        console.error(error)
        res.status(500).send('Server Error')
        return 1;
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).send('Product not found')
        }
        const updatedProduct = await Product.findById(id);
        return res.status(200).json(updatedProduct)

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
        return 1;
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).send('Product not found')
        }
        res.status(200).send('Product deleted')
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
        return 1;
    }
}

module.exports = {
    addProduct, getAllProducts, getProduct, updateProduct, deleteProduct
};