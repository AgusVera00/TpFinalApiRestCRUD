import {model , mongoose} from "mongoose";

const statusEnum = ["Available", "Not Available", "Discontinued"];

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter product name"],
        trim: true,
        lowerCase: true,
        unique: true,
        minLength: [3, "Product name should be at least 3 characters"],
        maxLength: [100, "Product name should be less than 100 characters"],

    },
    description: {
        type: String,
        required: [true, "Please enter product description"],
        trim: true,
        minLength: [10, "Product description should be at least 10 characters"],
        maxLength: [1000, "Product description should be less than 1000 characters"],
    },
    price: {
        type: Number,
        required: [true, "Please enter product price"],
        min: [0, "Product price should be greater than 0"],
    },

    stock:{
        type: Number,
        required: [true, "Please enter product stock"],
        min: [0, "Product stock should be greater than 0"],
    },

    status: {
        type: String,
        required: [true, "Please select product status"],
        validate:{
            validator: function(value){
                return statusEnum.includes(value);
            },
            message: "Please select a valid product status"
        },
        enum: statusEnum,


    },

    createdAt:{
        type: Date,
        default: Date.now()
    },

    image:{
        type: String,
        default:"https://picsum.photos/400"
    }




});

export default model("Product", productSchema);
