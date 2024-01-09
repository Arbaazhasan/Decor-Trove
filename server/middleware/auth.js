import jwt from "jsonwebtoken";
import { user } from "../model/user.js";

export const isAuthonticated = async (req, res, next) => {
    const { token } = req.cookies;

    if (!token) return res.status(401).json({
        succes: false,
        message: "Login First !"
    });

    const decoded = jwt.verify(token, process.env.JWT_URI);

    // with the help of it i can get user All data any where in the hole website
    req.userData = await user.findOne({ _id: decoded });

    next();
};