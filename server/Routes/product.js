import express from "express";
import { addPopularProduct, addBanner, deleteProduct, deleteSlider, getAllProducts, getArrivalProductCategory, getArrivalProducts, getProduct, getSliderSlide, newArrivals, newProduct, slider, updateArrivalCategory, updateProduct } from "../Controller/product.js";
import { adminIsAuthonticated, isAuthonticated } from "../middleware/auth.js";
import fileUpload from "../middleware/multer.js";


const router = express.Router();


// ********* Dashboard API *********

// Add, Delete, Update, Search Products 
router.post('/new', adminIsAuthonticated, fileUpload, newProduct);
router.post('/update/:pno', adminIsAuthonticated, fileUpload, updateProduct);
router.get('/delete/:pno', adminIsAuthonticated, deleteProduct);
router.get('/getallproducts', adminIsAuthonticated, getAllProducts);
router.get('/getproduct/:pno', adminIsAuthonticated, getProduct);


router.post('/addpopularproduct', adminIsAuthonticated, addPopularProduct);

router.post('/addarrival/:sno', adminIsAuthonticated, newArrivals);
router.put('/updatearrivalcategory', adminIsAuthonticated, updateArrivalCategory);
router.get('/getArrivalproductcategory', adminIsAuthonticated, getArrivalProductCategory);
router.get('/getarrivalproducts', adminIsAuthonticated, getArrivalProducts);


router.get('/getsliderslide', getSliderSlide);
router.post('/addslider', fileUpload, slider);
router.delete('/deleteslider/:slideno', deleteSlider);

router.post('/addbanner', fileUpload, addBanner);








export default router;