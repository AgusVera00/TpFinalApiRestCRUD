import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(204).json({ message: "No users found" });
        }
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

export const createUser = async (req, res) => {
    try{
        const userData = new User(req.body);
        const {email} = userData;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: "User already exists"});
        }
        const user = await userData.save();
        return res.status(201).json(user);
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
}

export const deleteUser = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndDelete(id);
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json({message: "User deleted"});
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
}

export const updateUser = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(id, req.body, {new: true});
        if(!user){
            return res.status(404).json({message: "User not found"});
        }
        return res.status(200).json(user);
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
}

export const validateUser = async (req, res) => {
    try{
        if(!(req.body.email && req.body.password)){
            return res.status(400).json({message: "There's a missing field"});
    }
    const userFound = await User.findOne({email: req.body.email});
    if(!userFound){
        return res.status(400).json({message: "User or password incorrect"});
    }

    if(bcrypt.compareSync(req.body.password, userFound.password)){
        const payload = {
             userId : userFound._id,
             userEmail: userFound.email,
         }

         const token = jwt.sign(payload,SECRET, {expiresIn: "1h"});
         const role = userFound.role;

         return res.status(200).json({message: "User logged in", token, role, user: {id: userFound._id, email: userFound.email}});
        }
       else{
        return res.status(400).json({message: "User or password incorrect"});
       }
    }
    catch(error){
        return res.status(500).json({error: error.message});
    }
       }