import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BiUserCircle } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import Cart from '../../Pages/Cart/Cart.jsx';
import { Link } from 'react-router-dom';
import './header.scss';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {

    const { userAuthenticated } = useSelector(state => state.user);

    const [isCart, setIscart] = useState();



    return (
        <div>
            <div style={{ display: `${isCart ? "block" : "none"}` }}>
                <Cart />
            </div>

            <div className="headerBar">

                <div className="brandName">
                    <span>Decor<span>Trove</span></span>
                </div>

                <div className="menu">

                    {/* <a href="">Home</a> */}

                    <Link to={'/'}>Home</Link>
                    <Link to={'/productes'}>Products</Link>

                    {/* <Link to={'/service'}>Services</Link> */}

                    <Link to={'/contactus'}>Contact</Link>
                </div>


                <div className="cart">
                    <Link to={'/wishlist'}>
                        <span><AiOutlineHeart /></span>
                    </Link>

                    <Link  >

                        <span onClick={() => setIscart(true)}> <HiOutlineShoppingBag /></span>

                    </Link>

                    <div>

                    </div>

                    {
                        userAuthenticated ?
                            <Link to={'/profile'}>

                                <span><BiUserCircle /></span>

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

export default Header;