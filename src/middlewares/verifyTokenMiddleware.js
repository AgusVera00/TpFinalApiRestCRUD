import jwt from "jsonwebtoken";
import { SECRET } from "../config.js";

export const verifyTokenMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const token = authHeader.split(" ")[1];
        const decodedToken = jwt.verify(token, SECRET);
        req.user = decodedToken;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized token" });
    };
};