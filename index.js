import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import productRoute from "./src/routes/productRoutes.js";
import userRoute from "./src/routes/userRoute.js";
import connectDB from "./src/db.js";

const app = express();

app.use(cors(
    {
        origin: '*',
        methods: ["GET", "POST", "PUT", "DELETE"],
    }
));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/api/product", productRoute);
app.use("/api/user", userRoute);

connectDB();


app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});


