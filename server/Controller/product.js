import multer from "multer";
import { product } from "../model/product.js";
import { sliderDoc } from "../model/slider.js";
import { bannerDoc } from "../model/banner.js";
import { newArrivalsModel } from "../model/newArrivals.js";
import { popularProductModel } from "../model/popularProducts.js";




// *********** Product Content **********


// New Product
export const newProduct = (req, res) => {

    try {
        const { pNo, name, desc, price, size, color, category, isStock, photo } = req.body;
        // console.log(pNo, name, desc, price, size, color, category, isStock, photo);

        const Product = product.create({
            pNo, name, desc, price, size, color, category, isStock, photo
        });
        res.status(201).json({
            success: true,
            message: "Product Uploaded"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        });
    }


};


// Update Product 

export const updateProduct = async (req, res) => {

    try {
        const find = req.params.pno;
        console.log(find);
        const { pNo, name, desc, price, size, color, category, isStock, photo } = req.body;

        const isProduct = await product.findOne({ pNo: find });

        if (!isProduct) return res.status(404).json({
            success: false,
            message: "Product not found"
        });

        await product.updateOne({ pNo: find }, {
            pNo, name, desc, price, size, color, category, isStock, photo
        });

        res.status(200).json({
            success: true,
            message: "Update"
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        });
    }
};


// Delete Product
export const deleteProduct = async (req, res) => {

    try {
        const find = req.params.pno;

        const isProduct = await product.findOne({ pNo: find });

        if (!isProduct) return res.status(404).json({
            success: false,
            message: "Product not Found!"
        });

        await product.deleteOne({ pNo: find });

        res.status(200).json({
            success: true,
            message: "Delete"
        });
    } catch (error) {
        res.status(400).josn({
            success: false,
            message: error
        });

    }
};


// Get All Products 
export const getAllProducts = async (req, res) => {

    try {
        const allProducts = await product.find();

        res.status(200).json({
            success: true,
            message: allProducts
        });
    } catch (error) {
        res.status(400).json({
            success: true,
            message: error
        });
    }
};


// Get Product
export const getProduct = async (req, res) => {
    try {

        const find = req.params.pno;

        const Product = await product.findOne({ pNo: find });

        res.status(200).json({
            success: true,
            message: Product
        });
    } catch (error) {

        res.status(400).json({
            success: false,
            message: error
        });
    }
};



// ********* Page Content *********


// Slider

export const slider = async (req, res) => {

    const { sliderNo, sliderImg, sliderText } = req.body;
    const { sno } = req.params;

    try {

        const isSlider = await sliderDoc.findOne({ sliderNo: sno });

        if (!isSlider) {
            await sliderDoc.create({
                sliderNo, sliderImg, sliderText
            });
            return res.status(201).json({
                success: true,
                message: "Created"
            });

        }

        await sliderDoc.updateOne({ sliderNo: sno }, { sliderImg, sliderText });


        res.status(200).json({
            success: true,
            message: "Updat"
        });
    } catch (error) {

        res.status(400).json({
            success: false,
            message: error
        });

    }

};


// Delete Slider

export const deleteSlider = async (req, res) => {

    const { sno } = req.params;
    const isSlider = await sliderDoc.findOne({ sliderNo: sno });

    if (!isSlider) return res.status(404).json({
        success: false,
        message: "Slider isn't Exists !!!"
    });

    await sliderDoc.deleteOne({ sliderNo: sno });

    res.status(200).json({
        success: true,
        message: "Delete"
    });


};


// Get Slider SLide

export const getSliderSlide = async (req, res) => {
    const data = await sliderDoc.find();


    res.status(200).json({
        success: true,
        message: data
    });
};


// Banner 
export const bannerAdd = async (req, res) => {

    const { sno } = req.params;
    const { imageName, img, bannerText } = req.body;

    const isBanner = await bannerDoc.findOne({ bannerNo: sno });

    if (!isBanner) {

        await bannerDoc.create({
            bannerNo: sno,
            imageName, img, bannerText

        });

        return res.status(201).json({
            success: true,
            message: "Upload"
        });
    }

    console.log(isBanner);

    await bannerDoc.updateOne({ bannerNo: sno }, {
        imageName, img, bannerText
    });

    res.status(200).json({
        success: true,
        message: "Update"
    });

};


// New Arrivals 

export const newArrivals = async (req, res) => {
    const { sno } = req.params;
    const { category, productNo } = req.body;


    const isProduct = await product.find({ pNo: productNo });

    if (!isProduct) return res.status(404).json({
        success: false,
        message: "product not Exits"
    });



    const isNewArrival = await newArrivalsModel.findOne({ itemNo: sno, category: category });


    if (!isNewArrival) {
        await newArrivalsModel.create({
            itemNo: sno, category, productNo,
        });

        return res.status(201).json({
            success: true,
            message: "Upload"
        });
    }

    await newArrivalsModel.updateOne({ itemNo: sno, category: category }, {
        itemNo: sno, category, productNo,

    });

    res.status(200).json({
        success: true,
        message: "Update"
    });


};


export const updateArrivalCategory = async (req, res) => {
    const { oldCat, newCat } = req.body;

    await newArrivalsModel.updateMany({ category: oldCat }, {
        category: newCat
    });

    res.status(200).json({
        success: true,
        message: "Update Category"
    });
};


export const getArrivalProducts = async (req, res) => {
    const { category } = req.body;

    const data = await newArrivalsModel.find({ category });

    if (!data) return console.log("Not");
    console.log(data);

    res.status(200).json({
        success: true,
        message: data
    });
};


// *******Popular Product *********

export const addPopulatProduct = async (req, res) => {

    const { sno } = req.params;

    const { productNo } = req.body;

    const isProdcut = await product.findOne({ pNo: sno });

    if (!isProdcut) return res.status(404).json({
        success: false,
        message: "Proudct not Exits !!!"
    });

    const isItem = await popularProductModel.findOne({ sno });

    if (!isItem) {
        popularProductModel.create({
            sno, productNo
        });

        return res.status(200).json({
            success: true,
            message: "Upload"
        });
    }

    await popularProductModel.updateOne({ sno }, {
        sno, productNo
    });

    res.status(200).json({
        success: true,
        message: "Update"
    });

};