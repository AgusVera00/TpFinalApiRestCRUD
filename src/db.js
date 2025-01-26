import { connect }  from "mongoose";
import { MONGOBD_URI } from "./config.js";

export const connectDB = async () => {
    try{
        await connect("mongodb://127.0.0.1:27017/utntpfinal");
        console.log("Database connected");
    }
    catch(error){
        console.log("Database connection failed", error);
        process.exit(1);
    }
}

export default connectDB;