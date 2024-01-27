import React from 'react';
import './DashBoard.scss';
import { useState } from 'react';
import SliderController from '../../components/SliderController/SliderController';
import BannerController from '../../components/BannerController/BannerController';
import NewArrivalsController from '../../components/NewArrivalsController/NewArrivalsController';
import PopularProductController from '../../components/PopularProductController/PopularProductController';
import SearchProduct from '../../components/SearchProduct/SearchProduct';
import AddProduct from '../../components/AddProduct/AddProduct';
import UpdateProductController from '../../components/UpdateProductController/UpdateProductController';
import DeleteProductController from '../../components/DeleteProductController/DeleteProductController';
import AllProducts from '../../components/AllProducts/AllProducts';
import { useDispatch, useSelector } from 'react-redux';


import { userLogout } from '../../redux/action/userLogin';
import { adminLogout, getAdminProfile } from '../../redux/action/adminLogin';
import { useEffect } from 'react';
import { getAllProduct } from '../../redux/action/dashboard';


const DashBoard = () => {

    // API Calling Function 

    const dispatch = useDispatch();


    const submitHandler = () => {
        getAllProduct(dispatch);

    };



    const [tabs, setTabs] = useState([false, false, false, false, true, false, false, false, false]);

    const { adminAuthenticated } = useSelector(state => state.admin);


    const setTrue = (index) => {
        setTabs((pre) => { return pre.map((tab, i) => (i == index ? true : false)); });
    };


    const handler = () => {
        adminLogout(dispatch);
        // userLogout(dispatch);
    };



    // let dashBoardTab = { "Slider": true, "Banner": false, "NewArrivals": false, "PopularProducts": false, "SearchProduct": false, "AddProduct": false, "UpdateProduct": false, "DeleteProduct": false, "AllProduct": false };


    useEffect(() => {

    }, [adminAuthenticated]);


    return (
        <div>

            <div className="deshBoard">
                <div className="left">
                    <h1>Dash Board</h1>

                    <div>

                        <div>
                            <h2>Page Content </h2>
                            <p><span onClick={() => setTrue(0)}>Slider</span></p>
                            <p><span onClick={() => setTrue(1)}>Banner</span></p>
                            <p><span onClick={() => setTrue(2)}>New Arrivals</span></p>
                            <p><span onClick={() => setTrue(3)}>Pupular Product</span></p>
                        </div>

                        <div>
                            <h2>Product Content</h2>
                            <p onClick={() => { setTrue(4); }}>Search Product</p>
                            <p onClick={() => { setTrue(5); }}>Add Product</p>
                            <p onClick={() => { setTrue(6); }}>Update Product</p>
                            <p onClick={() => { setTrue(7); }}>Delete Product</p>
                            <p onClick={() => { setTrue(8); submitHandler(); }}>All Products</p>
                        </div>
                    </div>

                </div>


                <div className="right">

                    <div className="top">


                        {

                            tabs[0] && <h1>Slider </h1>

                        }



                        {

                            tabs[1] && <h1>Banner</h1>

                        }


                        {

                            tabs[2] && <h1>New Arrivals </h1>

                        }


                        {

                            tabs[3] && <h1>Popular Product </h1>

                        }


                        {

                            tabs[4] && <h1>Search Product </h1>

                        }


                        {

                            tabs[5] && <h1>Add Product </h1>

                        }


                        {

                            tabs[6] && <h1>Update Product </h1>

                        }


                        {

                            tabs[7] && <h1>Delete Product</h1>

                        }


                        {

                            tabs[8] && <h1>All Product</h1>

                        }


                        <button onClick={handler}>Logout</button>



                    </div>

                    <div className="bottom">

                        {/* ****Page Content****  */}


                        {
                            // dashBoardTab.Slider ? <SliderController /> : ""
                            // dashBoardTab.Slider && <SliderController />
                            tabs[0] && <SliderController />


                        }

                        {

                            tabs[1] && <BannerController />

                        }

                        {
                            tabs[2] && <NewArrivalsController />

                        }


                        {
                            tabs[3] && <PopularProductController />

                        }



                        {/* ****Product Content****  */}


                        {
                            tabs[4] && <SearchProduct />

                        }

                        {
                            tabs[5] && <AddProduct />

                        }

                        {
                            tabs[6] && <UpdateProductController />

                        }


                        {
                            tabs[7] && <DeleteProductController />

                        }

                        {
                            tabs[8] && <AllProducts />

                        }



                    </div>

                </div>




            </div>
        </div >
    );
};

export default DashBoard;