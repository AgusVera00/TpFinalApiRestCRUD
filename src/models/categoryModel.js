import mongoose, { Schema } from "mongoose";

export const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter category name"],
        trim: true,
        lowercase: true,
        minLength: [3, "Category name should be at least 3 characters"],
        maxLength: [30, "Category name should be less than 100 characters"],
    },
    description: {
        type: String,
        required: [true, "Please enter category description"],
        trim: true,
    },

    category:{type: Schema.Types.ObjectId, ref:"category"},
    

});


export default mongoose.model("Category", categorySchema);
