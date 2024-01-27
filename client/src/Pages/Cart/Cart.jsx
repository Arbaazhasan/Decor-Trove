import React from 'react';
import './cart.scss';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Cart = () => {

    const [isCart, setIscart] = useState();



    return (
        <div>
            <div className="cartWindow">
                <div className="left"></div>

                <div className="right">

                    <div className="header">
                        <p>item(s)</p>
                        <span onClick={() => { setIscart(false); }}>
                            <Link to={'/cart'}>
                                X
                            </Link>
                        </span>
                    </div>

                    <div className="cartList">



                        <Link to={'/productdetails'} className="cartItem">
                            <div className="photo">
                                <img src="plant.jpg" alt="" />
                            </div>
                            <div className="itemDetails">
                                <p>Jasminah Paris</p>
                                <span>$45.00</span>
                                <div>
                                    <span>Add to Wishlist</span>
                                    <span>Remove</span>
                                </div>
                            </div>
                            <div className="isOrder">
                                <input type="checkbox" />
                            </div>
                        </Link>






                        <Link to={'/productdetails'} className="cartItem">
                            <div className="photo">
                                <img src="plant.jpg" alt="" />
                            </div>
                            <div className="itemDetails">
                                <p>Jasminah Paris</p>
                                <span>$45.00</span>
                                <div>
                                    <span>Add to Wishlist</span>
                                    <span>Remove</span>
                                </div>
                            </div>
                            <div className="isOrder">
                                <input type="checkbox" />
                            </div>
                        </Link>






                        <Link to={'/productdetails'} className="cartItem">
                            <div className="photo">
                                <img src="plant.jpg" alt="" />
                            </div>
                            <div className="itemDetails">
                                <p>Jasminah Paris</p>
                                <span>$45.00</span>
                                <div>
                                    <span>Add to Wishlist</span>
                                    <span>Remove</span>
                                </div>
                            </div>
                            <div className="isOrder">
                                <input type="checkbox" />
                            </div>
                        </Link>






                        <Link to={'/productdetails'} className="cartItem">
                            <div className="photo">
                                <img src="plant.jpg" alt="" />
                            </div>
                            <div className="itemDetails">
                                <p>Jasminah Paris</p>
                                <span>$45.00</span>
                                <div>
                                    <span>Add to Wishlist</span>
                                    <span>Remove</span>
                                </div>
                            </div>
                            <div className="isOrder">
                                <input type="checkbox" />
                            </div>
                        </Link>






                        <Link to={'/productdetails'} className="cartItem">
                            <div className="photo">
                                <img src="plant.jpg" alt="" />
                            </div>
                            <div className="itemDetails">
                                <p>Jasminah Paris</p>
                                <span>$45.00</span>
                                <div>
                                    <span>Add to Wishlist</span>
                                    <span>Remove</span>
                                </div>
                            </div>
                            <div className="isOrder">
                                <input type="checkbox" />
                            </div>
                        </Link>






                        <Link to={'/productdetails'} className="cartItem">
                            <div className="photo">
                                <img src="plant.jpg" alt="" />
                            </div>
                            <div className="itemDetails">
                                <p>Jasminah Paris</p>
                                <span>$45.00</span>
                                <div>
                                    <span>Add to Wishlist</span>
                                    <span>Remove</span>
                                </div>
                            </div>
                            <div className="isOrder">
                                <input type="checkbox" />
                            </div>
                        </Link>






                        <Link to={'/productdetails'} className="cartItem">
                            <div className="photo">
                                <img src="plant.jpg" alt="" />
                            </div>
                            <div className="itemDetails">
                                <p>Jasminah Paris</p>
                                <span>$45.00</span>
                                <div>
                                    <span>Add to Wishlist</span>
                                    <span>Remove</span>
                                </div>
                            </div>
                            <div className="isOrder">
                                <input type="checkbox" />
                            </div>
                        </Link>






                        <Link to={'/productdetails'} className="cartItem">
                            <div className="photo">
                                <img src="plant.jpg" alt="" />
                            </div>
                            <div className="itemDetails">
                                <p>Jasminah Paris</p>
                                <span>$45.00</span>
                                <div>
                                    <span>Add to Wishlist</span>
                                    <span>Remove</span>
                                </div>
                            </div>
                            <div className="isOrder">
                                <input type="checkbox" />
                            </div>
                        </Link>






                        <Link to={'/productdetails'} className="cartItem">
                            <div className="photo">
                                <img src="plant.jpg" alt="" />
                            </div>
                            <div className="itemDetails">
                                <p>Jasminah Paris</p>
                                <span>$45.00</span>
                                <div>
                                    <span>Add to Wishlist</span>
                                    <span>Remove</span>
                                </div>
                            </div>
                            <div className="isOrder">
                                <input type="checkbox" />
                            </div>
                        </Link>





                    </div>

                    <div className="orderNow">
                        <div className="totalAmmount">
                            <p>$100.00</p>
                            <span>Total</span>
                        </div>

                        <div className="orderBtn">
                            <button>Buy</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Cart;