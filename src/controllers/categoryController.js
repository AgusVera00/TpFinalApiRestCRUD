import Category from "../models/categoryModel.js";

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        if (categories.length === 0) {
            return res.status(204).json({ message: "No categories found" });
        }
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createCategory = async (req, res) => {
    try {
        const categoryData = req.body;
        const { name } = categoryData;
        const categoryExists = await Category.findOne({ name });
        if (categoryExists) {
            return res.status(400).json({ message: "Category already exists" });
        }
        const newCategory = new Category(categoryData);
        const savedCategory = await newCategory.save();
        res.status(201).json(savedCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const _id = req.params.id;
        const categoryExist = await Category.findOne({ _id });
        if (!categoryExist) {
        return res.status(400).json({ message: "Category does not exist" });
        }
        const response = await Category.findByIdAndDelete(_id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    }
};