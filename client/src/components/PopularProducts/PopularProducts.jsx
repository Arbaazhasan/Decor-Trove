import React from 'react';
import './popularProducts.scss';
import { Link } from 'react-router-dom';

const PopularProducts = () => {
    return (
        <div>
            <div className="popularProduct">
                <h1>POPULAR PRODUCT</h1>
                <div className="arrivalsProducts">

                    <Link to={'/productdetails'} className="arrivalProduct">
                        <div className="productPhoto">
                            {/* <img src="Ap.jpg" alt="img" /> */}
                            <div className="ItemTag">New</div>
                            <div className="addToCart">
                                ADD TO CART
                            </div>

                        </div>
                        <div className="nameANdPrice">
                            <p>Dummy Product</p>
                            <span>$50.00</span>
                        </div>
                    </Link>



                    <Link to={'/productdetails'} className="arrivalProduct">
                        <div className="productPhoto">
                            {/* <img src="Ap.jpg" alt="img" /> */}
                            <div className="ItemTag">New</div>
                            <div className="addToCart">
                                ADD TO CART
                            </div>

                        </div>
                        <div className="nameANdPrice">
                            <p>Dummy Product</p>
                            <span>$50.00</span>
                        </div>
                    </Link>



                    <Link to={'/productdetails'} className="arrivalProduct">
                        <div className="productPhoto">
                            {/* <img src="Ap.jpg" alt="img" /> */}
                            <div className="ItemTag">New</div>
                            <div className="addToCart">
                                ADD TO CART
                            </div>

                        </div>
                        <div className="nameANdPrice">
                            <p>Dummy Product</p>
                            <span>$50.00</span>
                        </div>
                    </Link>



                    <Link to={'/productdetails'} className="arrivalProduct">
                        <div className="productPhoto">
                            {/* <img src="Ap.jpg" alt="img" /> */}
                            <div className="ItemTag">New</div>
                            <div className="addToCart">
                                ADD TO CART
                            </div>

                        </div>
                        <div className="nameANdPrice">
                            <p>Dummy Product</p>
                            <span>$50.00</span>
                        </div>
                    </Link>




                </div>
            </div>
        </div>
    );
};

export default PopularProducts;