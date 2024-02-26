import React from 'react';
import './wishList.scss';

import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const WishList = () => {

    const { wishlistArray } = useSelector(state => state.product);

    useEffect(() => {
        // console.log(wishlistArray.Wishlist);

    }, [wishlistArray.Wishlist]);


    return (
        <div>
            <div className="wishList">
                <h2>Wish List</h2>


                <div className="itemsList">




                    <Link to={'/productdetails'} className="listItem">

                        <div className="itemPhoto">
                            <img src="plant.jpg" alt="" />
                        </div>

                        <div className="ItemDetails">
                            <p>Jasminah Paris</p>
                            <div className="rateing">
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                            </div>

                            <div className="itemPrice">
                                <p>$45.00</p>
                            </div>

                            <div className="itemInformation">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut voluptate nesciunt mollitia corporis amet maxime facere fugiat adipisci! Illo blanditiis cumque iure quibusdam, autem minima magni. Aliquam, distinctio porro!</p>
                            </div>
                        </div>

                        <div className="tocartBtn">
                            <p><span>x</span></p>

                            <button>ADD TO CART</button>


                        </div>

                    </Link>





                    <Link to={'/productdetails'} className="listItem">

                        <div className="itemPhoto">
                            <img src="plant.jpg" alt="" />
                        </div>

                        <div className="ItemDetails">
                            <p>Jasminah Paris</p>
                            <div className="rateing">
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                            </div>

                            <div className="itemPrice">
                                <p>$45.00</p>
                            </div>

                            <div className="itemInformation">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut voluptate nesciunt mollitia corporis amet maxime facere fugiat adipisci! Illo blanditiis cumque iure quibusdam, autem minima magni. Aliquam, distinctio porro!</p>
                            </div>
                        </div>

                        <div className="tocartBtn">
                            <p><span>x</span></p>

                            <button>ADD TO CART</button>


                        </div>

                    </Link>





                    <Link to={'/productdetails'} className="listItem">

                        <div className="itemPhoto">
                            <img src="plant.jpg" alt="" />
                        </div>

                        <div className="ItemDetails">
                            <p>Jasminah Paris</p>
                            <div className="rateing">
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                            </div>

                            <div className="itemPrice">
                                <p>$45.00</p>
                            </div>

                            <div className="itemInformation">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut voluptate nesciunt mollitia corporis amet maxime facere fugiat adipisci! Illo blanditiis cumque iure quibusdam, autem minima magni. Aliquam, distinctio porro!</p>
                            </div>
                        </div>

                        <div className="tocartBtn">
                            <p><span>x</span></p>

                            <button>ADD TO CART</button>


                        </div>

                    </Link>





                    <Link to={'/productdetails'} className="listItem">

                        <div className="itemPhoto">
                            <img src="plant.jpg" alt="" />
                        </div>

                        <div className="ItemDetails">
                            <p>Jasminah Paris</p>
                            <div className="rateing">
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                            </div>

                            <div className="itemPrice">
                                <p>$45.00</p>
                            </div>

                            <div className="itemInformation">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut voluptate nesciunt mollitia corporis amet maxime facere fugiat adipisci! Illo blanditiis cumque iure quibusdam, autem minima magni. Aliquam, distinctio porro!</p>
                            </div>
                        </div>

                        <div className="tocartBtn">
                            <p><span>x</span></p>

                            <button>ADD TO CART</button>


                        </div>

                    </Link>





                    <Link to={'/productdetails'} className="listItem">

                        <div className="itemPhoto">
                            <img src="plant.jpg" alt="" />
                        </div>

                        <div className="ItemDetails">
                            <p>Jasminah Paris</p>
                            <div className="rateing">
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                            </div>

                            <div className="itemPrice">
                                <p>$45.00</p>
                            </div>

                            <div className="itemInformation">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut voluptate nesciunt mollitia corporis amet maxime facere fugiat adipisci! Illo blanditiis cumque iure quibusdam, autem minima magni. Aliquam, distinctio porro!</p>
                            </div>
                        </div>

                        <div className="tocartBtn">
                            <p><span>x</span></p>

                            <button>ADD TO CART</button>


                        </div>

                    </Link>





                    <Link to={'/productdetails'} className="listItem">

                        <div className="itemPhoto">
                            <img src="plant.jpg" alt="" />
                        </div>

                        <div className="ItemDetails">
                            <p>Jasminah Paris</p>
                            <div className="rateing">
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                            </div>

                            <div className="itemPrice">
                                <p>$45.00</p>
                            </div>

                            <div className="itemInformation">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut voluptate nesciunt mollitia corporis amet maxime facere fugiat adipisci! Illo blanditiis cumque iure quibusdam, autem minima magni. Aliquam, distinctio porro!</p>
                            </div>
                        </div>

                        <div className="tocartBtn">
                            <p><span>x</span></p>

                            <button>ADD TO CART</button>


                        </div>

                    </Link>





                    <Link to={'/productdetails'} className="listItem">

                        <div className="itemPhoto">
                            <img src="plant.jpg" alt="" />
                        </div>

                        <div className="ItemDetails">
                            <p>Jasminah Paris</p>
                            <div className="rateing">
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                            </div>

                            <div className="itemPrice">
                                <p>$45.00</p>
                            </div>

                            <div className="itemInformation">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut voluptate nesciunt mollitia corporis amet maxime facere fugiat adipisci! Illo blanditiis cumque iure quibusdam, autem minima magni. Aliquam, distinctio porro!</p>
                            </div>
                        </div>

                        <div className="tocartBtn">
                            <p><span>x</span></p>

                            <button>ADD TO CART</button>


                        </div>

                    </Link>





                    <Link to={'/productdetails'} className="listItem">

                        <div className="itemPhoto">
                            <img src="plant.jpg" alt="" />
                        </div>

                        <div className="ItemDetails">
                            <p>Jasminah Paris</p>
                            <div className="rateing">
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                                <span><AiFillStar /></span>
                            </div>

                            <div className="itemPrice">
                                <p>$45.00</p>
                            </div>

                            <div className="itemInformation">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aut voluptate nesciunt mollitia corporis amet maxime facere fugiat adipisci! Illo blanditiis cumque iure quibusdam, autem minima magni. Aliquam, distinctio porro!</p>
                            </div>
                        </div>

                        <div className="tocartBtn">
                            <p><span>x</span></p>

                            <button>ADD TO CART</button>


                        </div>

                    </Link>


                </div>
            </div>
        </div>
    );
};

export default WishList;