import {Router} from "express";
import {getUsers , createUser , validateUser} from "../controllers/userController.js";

const userRoute = Router();

userRoute.get("/get", getUsers);
userRoute.post("/create", createUser);
userRoute.post("/login", validateUser);

export default userRoute;