import {Router} from "express";
import {getProducts, createProduct, findProductByName, findProductById, deleteProduct, updateProduct} from "../controllers/productController.js";
import {verifyTokenMiddleware} from "../middlewares/verifyTokenMiddleware.js";

const productRoute = Router();

productRoute.get("/get", verifyTokenMiddleware, getProducts);
productRoute.post("/create", verifyTokenMiddleware,createProduct);
productRoute.post("/find", verifyTokenMiddleware, findProductByName);
productRoute.get("/find/:id", verifyTokenMiddleware, findProductById);
productRoute.post("/delete/:id", verifyTokenMiddleware, deleteProduct);
productRoute.post("/update/:id", verifyTokenMiddleware, updateProduct);

export default productRoute;