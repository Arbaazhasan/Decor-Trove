import React from 'react';
import './cart.scss';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { isCartMainWindow, isCartMainWindowClose } from '../../redux/action/userLogin';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const Cart = () => {

    const dispatch = useDispatch();
    const { isCartWindow } = useSelector(state => state.user);
    const { cartArray } = useSelector(state => state.product);

    const clickHandler = () => {

        isCartMainWindowClose(dispatch, !isCartWindow);

    };


    useEffect(() => {

        console.log(cartArray);

    }, [isCartWindow, cartArray]);

    return (
        <div className="cartWindow">
            <div className="left" style={{ "width": `${isCartWindow ? '100%' : '0'} `, "transition": "2s all" }}></div>

            <div className="right" style={{ "right": `${isCartWindow ? '0' : '100%'} `, "transition": "2s all" }}>

                <div className="header">
                    <p>items</p>
                    <span onClick={clickHandler}>
                        X
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
    );
};

export default Cart;