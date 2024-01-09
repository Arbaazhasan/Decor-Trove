import mongoose from "mongoose";

const sliderModel = mongoose.Schema({

    sliderNo: {
        type: Number,
        require: true,
        unique: true
    }
    ,
    sliderImg: {
        type: String,
    },

    sliderText: {
        type: String,
    }

});


export const sliderDoc = new mongoose.model("Slider", sliderModel);