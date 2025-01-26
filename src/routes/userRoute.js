import {Router} from "express";
import {getUsers , createUser , validateUser, deleteUser, updateUser} from "../controllers/userController.js";
import {verifyTokenMiddleware} from "../middlewares/verifyTokenMiddleware.js";

const userRoute = Router();

userRoute.get("/get", getUsers);
userRoute.post("/create", createUser);
userRoute.post("/delete/:id",verifyTokenMiddleware, deleteUser);
userRoute.post("/update/:id",verifyTokenMiddleware, updateUser);
userRoute.post("/login", validateUser);

export default userRoute;