import { user } from "../model/user.js";
import jwt from "jsonwebtoken";
import bcypt from "bcrypt";


// Register
export const register = async (req, res) => {
    try {
        const { name, username, password } = req.body;

        const isUser = await user.findOne({ username });

        if (isUser) return res.status(409).json({
            success: false,
            message: "User already Exits !!!"
        });

        // hasing Password
        const pass = await bcypt.hash(password, 10);


        const User = await user.create({
            name,
            username,
            password: pass
        });


        const token = jwt.sign({ _id: User._id }, process.env.JWT_URI);
        // console.log(token);

        res.status(200).cookie("token", token, {
            maxAge: 1000 * 60 * 60,
            httpOnly: true,

        }).json({
            success: true,
            message: "Registerd !!!"
        });

    } catch (error) {
        res.status(400).json({
            success: true,
            message: error
        });
    }

};


// Login
export const login = async (req, res) => {
    const { username, password } = req.body;


    try {
        const User = await user.findOne({ username }).select('+password');

        const hasedPass = await bcypt.compare(password, User.password);

        if (!User) return res.status(400).json({
            success: false,
            message: "Incorrect user or password !"
        });

        if (!hasedPass) return res.status(400).json({
            success: false,
            message: "Incorrect user or Password !"
        });

        const token = jwt.sign({ _id: User._id }, process.env.JWT_URI);
        // console.log(token);

        res.status(200).cookie("token", token, {
            maxAge: 1000 * 60 * 60,
            httpOnly: true
        }).json({
            success: true,
            message: `Welcome Back ${User.name}`
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error
        });
    }


};


// Logout
export const logout = (req, res) => {

    try {
        res.status(200).cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true
        }).json({
            success: true,
            message: "Logout"
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error
        });
    }

};