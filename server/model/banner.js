import mongoose from "mongoose";

const BannerModel = mongoose.Schema({

    bannerNo: {
        type: String,
        require: true,

    },
    imageName: {
        type: String,
    },

    img: {
        type: String
    },

    bannerText: {
        type: String,
    }

});

export const bannerDoc = new mongoose.model("banner", BannerModel);