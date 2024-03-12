import React from 'react';
import './header.scss';

import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import Cart from '../../Pages/Cart/Cart.jsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserProfileWindow } from '../../redux/Reducer/userReducer.js';
import { isCartMainWindow } from '../../redux/action/userLogin.js';
import { useEffect } from 'react';
import { addProductWishlist, getUserWishlistArray } from '../../redux/action/product.js';

const Header = () => {

    const { userAuthenticated, isCartWindow, isProfilWindow } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const clickHanlder = (val) => {

        dispatch(setUserProfileWindow(val));
    };

    const cartHandler = () => {

        isCartMainWindow(dispatch, !isCartWindow);

    };

    const wishListDataHandler = () => {
        getUserWishlistArray(dispatch);

    };



    useEffect(() => {

    }, [isCartWindow]);



    return (
        <div>
            <div className='headerClassComponent' style={{ display: `${isCartWindow ? "flex" : "none"}` }}>
                <Cart />
            </div>

            <div className="headerBar">

                <div className="brandName">
                    <span>Decor<span>Trove</span></span>
                </div>

                <div className="menu">

                    {/* <a href="">Home</a> */}

                    <Link to={userAuthenticated ? '/me' : '/'}>Home</Link>
                    <Link to={'/productes'}>Products</Link>

                    {/* <Link to={'/service'}>Services</Link> */}

                    <Link to={'/contactus'}>Contact</Link>
                </div>


                <div className="cart">
                    <Link to={'/wishlist'}>
                        <span onClick={wishListDataHandler}><AiOutlineHeart /></span>
                    </Link>

                    <Link  >

                        <span onClick={cartHandler}> <HiOutlineShoppingBag /></span>

                    </Link>

                    <div>

                    </div>

                    {
                        userAuthenticated ?
                            <Link to={'/profile'}>

                                <span onClick={() => clickHanlder(true)}><BiUserCircle /></span>

                            </Link>

                            :

                            <Link to={'/login'}>

                                <span><BiUserCircle /></span>

                            </Link>
                    }


                </div>
            </div >


        </div >
    );
};

export default Header;;;