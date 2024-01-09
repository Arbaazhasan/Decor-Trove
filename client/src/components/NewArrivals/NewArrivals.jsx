import React from 'react';
import './newArrivals.scss';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    return (
        <div>
            <div className="newArrivalsBar">
                <h1>New Arrivals </h1>


                <div className="newArrivalsProdcutBar">
                    <div><span>Home Decore</span></div>
                    <div><span>Textiles & rugs</span> </div>
                    <div><span>Art & prints</span> </div>
                    <div><span> Curtains & blinds</span></div>
                    <div><span>Plant Decor</span> </div>
                </div>


                <div className="arrivalsProducts">



                    <Link to={'/productdetails'} className="arrivalProduct">
                        <div className="productPhoto">
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

export default NewArrivals;