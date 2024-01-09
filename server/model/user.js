import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        select: false
    }
});

export const user = mongoose.model("user", userSchema);