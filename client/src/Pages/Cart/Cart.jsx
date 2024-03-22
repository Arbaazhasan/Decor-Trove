import React from 'react';
import './cart.scss';
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { isCartMainWindow, isCartMainWindowClose } from '../../redux/action/userLogin';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addProductCart } from '../../redux/action/cart';

const Cart = () => {

    const dispatch = useDispatch();

    const { isCartWindow } = useSelector(state => state.user);
    const { cartArray } = useSelector(state => state.product);
    const { cart, cartTotal } = useSelector(state => state.cart);



    const clickHandler = () => {

        isCartMainWindowClose(dispatch, !isCartWindow);

    };


    const addProductCartHandler = (product) => {

        addProductCart(dispatch, product, cart);

    };



    useEffect(() => {

        // console.log(cartArray);

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


                    {

                        cartArray && cartArray.map((i, index) => (
                            <div className="cartItem" key={index}>

                                <Link to={`/productdetails/${i._id}`} className="photo">
                                    <img src={i.img[0].url} alt="" />
                                </Link>

                                <div className="itemDetails">
                                    <Link to={`/productdetails/${i._id}`} className='descPrice'>
                                        <p>{i.name}</p>
                                        <span>₹{i.price}</span>

                                    </Link>

                                    <div className='Btns'>
                                        <span>Add to Wishlist</span>
                                        <span>Remove</span>
                                    </div>
                                </div>


                                <div className="isOrder">
                                    <input type="checkbox" onClick={() => addProductCartHandler(i)} />
                                </div>
                            </div>



                        ))
                    }

                </div>

                <div className="orderNow">
                    <div className="totalAmmount">
                        <p>₹{cartTotal}</p>
                        <span>Total</span>
                    </div>

                    <Link to='/order' className="orderBtn">
                        <button>Buy</button>
                    </Link>
                </div>

            </div>
        </div >
    );
};

export default Cart;