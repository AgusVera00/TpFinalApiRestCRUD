import {Router} from "express";
import {getCategories , createCategory, deleteCategory} from "../controllers/categoryController.js";
import {verifyTokenMiddleware} from "../middlewares/verifyTokenMiddleware.js";

const categoryRoute = Router();

categoryRoute.get("/get", verifyTokenMiddleware, getCategories);
categoryRoute.post("/create",verifyTokenMiddleware, createCategory);
categoryRoute.post("/delete/:id",verifyTokenMiddleware, deleteCategory);

export default categoryRoute;