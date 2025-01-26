import { connect }  from "mongoose";
import { MONGODB_URI } from "./config.js";

export const connectDB = async () => {
    try{
        await connect(MONGODB_URI);
        console.log("Database connected");
    }
    catch(error){
        console.log("Database connection failed", error);
        process.exit(1);
    }
}

export default connectDB;