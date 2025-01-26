import Product from "../models/productModel.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        if (products.length === 0) {
            return res.status(204).json({ message: "No products found" });
        }
        return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        const productData = req.body;
        const { name } = productData;
        const productExists = await Product.findOne({ name }).populate({
            path: "category",
            select: "name",
        });
        if (productExists) {
            return res.status(400).json({ message: "Product already exists" });
        }
        const newProduct = new Product(productData);
        const savedProduct = await newProduct.save();
        return res.status(201).json(savedProduct);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const findProductByName = async (req, res) => {
    try {
        const name = req.body.name;
        const parsedName = name.trim().toLowerCase();
        const productExist = await Product.findOne({ name: parsedName });
    if (!productExist) {
        return res.status(400).json({ message: `Product ${name} doesn't exist` });
    }
        res.status(200).json({ productExist });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const findProductById = async (req, res) => {
    try {
        const _id = req.params.id;
        const productExist = await Product.findOne({ _id });
        if (!productExist) {
        return res.status(400).json({ message: `Product doesn't exist` });
        }
        res.status(200).json({ productExist });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const productExist = await Product.findOne({ _id })
        if(!productExist){
        return res.status(400).json({ message: "User does not exist" })
        }

        const updateProduct = await Product.findByIdAndUpdate({ _id }, req.body, {new: true})

        res.status(201).json(updateProduct)

    } catch (error) {
        res.status(500).json({ message: "internal server error", error })
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const productExist = await Product.findOne({ _id: id });
        if (!productExist) {
        return res.status(404).json({ message: "Product not found" });
        }
        await Product.findByIdAndDelete(id);
        res.status(201).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "internal server error", error });
    }
};