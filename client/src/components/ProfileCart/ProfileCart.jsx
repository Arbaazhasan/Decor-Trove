import React from 'react';
import "./profileCart.scss";

import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addCardProduct, addProductWishlist, getCartArray, removeProductCart } from '../../redux/action/product';
import { useState } from 'react';


const ProfileCart = () => {


    const [orderQty, setOrderQty] = useState(1);
    const { pageRefresh } = useSelector(state => state.product);

    const countPlus = () => {
        setOrderQty(orderQty + 1);
    };


    const countMinus = (qty) => {
        if (orderQty === 1) {
            return setOrderQty(1);

        }
        setOrderQty(orderQty - 1);
    };


    const { cartArray } = useSelector(state => state.product);
    const dispatch = useDispatch();


    const wishListHandler = (id) => {
        addProductWishlist(dispatch, id, !pageRefresh);
        getCartArray(dispatch);

    };


    const productRemoveHandler = (id) => {

        removeProductCart(dispatch, id);

    };


    const addProductCartHandler = (i) => {
        addCardProduct(dispatch, i);
    };

    useEffect(() => {
        // console.log(cartArray);
    }, [cartArray]);

    return (
        <div className="profileCart" >
            <div className="cartList">

                {

                    cartArray && cartArray.map((i) => (
                        <div to={`/productdetails/${i._id}`} className="cartItem" key={i._id}>
                            <Link to={`/productdetails/`} className="photo">
                                <img src={i.img[0].url} alt="" />
                            </Link>


                            <div className="itemDetails">
                                <Link to={`/productdetails/${i._id}`}>

                                    <div>
                                        <p>{i.name}</p>
                                        <span>${i.price}</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta corporis repellendus doloremque doloribus sequi earum vel ex sunt quidem accusantium, quae in quis qui totam excepturi ullam, neque similique adipisci dignissimos! Inventore?</p>
                                    </div>

                                </Link>

                                <div className='addAndremoveBtn'>


                                    {
                                        i.isInclude ? "" : <button onClick={() => { wishListHandler(i._id); }}>Add to Wishlist</button>
                                    }

                                    <button onClick={() => { productRemoveHandler(i._id); }}>Remove</button>
                                </div>

                            </div>

                            <div className="cartItemQty">
                                <div className="productQty">

                                    <button onClick={() => countMinus(i.qty)}>&lt;</button>
                                    {
                                        // setOrderQty(i.qty)
                                    }
                                    {/* <span>{orderQty}</span> */}

                                    <span>{i.qty}</span>



                                    <button onClick={countPlus}>&gt;</button>
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
                    <p>$100.00</p>
                    <span>Total</span>
                </div>

                <div className="orderBtn">
                    <button>Buy</button>
                </div>
            </div>



        </div>
    );
};

export default ProfileCart;