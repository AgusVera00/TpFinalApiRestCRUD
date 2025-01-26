import {model, mongoose} from "mongoose";
import bcrypt from "bcrypt";
import { isGoodPassword } from "../utils/validators.js";

const rolesEnum = ["admin", "user"];

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"],
        trim: true,
        lowercase: true,
        minLength: [3, "Name should be at least 3 characters"],
        maxLength: [30, "Name should be less than 100 characters"],

    },
    lastname: {
        type: String,
        required: [true, "Please enter your last name"],
        lowercase: true,
        trim: true,
        minLength: [3, "Last name should be at least 3 characters"],
        maxLength: [50, "Last name should be less than 100 characters"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        trim: true,
        unique: true,
        lowercase: true,
        match: [
            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            "Please enter a valid email",
        ],
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        trim: true,
        validate: {
            validator: function (value) {
              return isGoodPassword(value);
            },
            message:
              "Password must be between 6 and 12 characters, with at least one number, one upercase letter and one lowercase letter",
          },
    },
    roles: {
        type: String,
        validate:{
            validator: function(roles){
                return rolesEnum.includes(roles);
            },
            message: "Please select a valid role"
        },   
        enum: rolesEnum,
        required: [true, "Please select a role"],
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

userSchema.pre("save", function (next) {
    this.password = bcrypt.hashSync(this.password, 10);
    next();
});

export default model("User", userSchema);