import {Router} from "express";
import {getProducts} from "../controllers/productController.js";

const productRoute = Router();

productRoute.get("/get", getProducts);

export default productRoute;