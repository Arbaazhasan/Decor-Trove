import express from "express";
import { addPopulatProduct, bannerAdd, deleteProduct, deleteSlider, getAllProducts, getArrivalProducts, getProduct, getSliderSlide, newArrivals, newProduct, slider, updateArrivalCategory, updateProduct } from "../Controller/product.js";
import { isAuthonticated } from "../middleware/auth.js";
import { sliderDoc } from "../model/slider.js";


const router = express.Router();

router.post('/new', isAuthonticated, newProduct);
router.post('/update/:pno', isAuthonticated, updateProduct);
router.post('/delete/:pno', isAuthonticated, deleteProduct);
router.get('/getallproducts', isAuthonticated, getAllProducts);
router.get('/getproduct/:pno', isAuthonticated, getProduct);

// ******Page Content **********

// Slider
router.post('/addslider/:sno', slider);
router.delete('/deleteslider/:sno', deleteSlider);
router.get('/getsliderslide', getSliderSlide);

// Banner
router.post('/addbanner/:sno', bannerAdd);

// New Arrivals 

router.post('/addarrival/:sno', newArrivals);
router.put('/updatearrivalcategory', updateArrivalCategory);
router.get('/getarrivalproducts', getArrivalProducts);


// Popular Products 

router.post('/addpopularproduct/:sno', addPopulatProduct);


export default router;