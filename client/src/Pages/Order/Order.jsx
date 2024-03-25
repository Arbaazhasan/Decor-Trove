import React from 'react';
import './order.scss';
import { MdDeleteForever } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { TfiDropboxAlt } from "react-icons/tfi";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getGrandTotal, removeProductOrderList, updateProductQty } from '../../redux/action/cart';
import axios from 'axios';


const Order = () => {

    const dispatch = useDispatch();
    const { cart, orderGrandTotal } = useSelector(state => state.cart);
    let [productArray, setProductArray] = useState([]);

    const [isCard, setIsCard] = useState(true);


    const updateQty = (product, operation) => {

        updateProductQty(dispatch, productArray, operation, product);

    };

    const removeProduct = (product) => {

        removeProductOrderList(dispatch, product, productArray);

    };


    useEffect(() => {

        const storedData = localStorage.getItem('localStorageCartArray');

        const retrievedData = JSON.parse(storedData);

        setProductArray(retrievedData);

        getGrandTotal(dispatch, retrievedData);

        // setProductArray(Array.from(cart));

        // getGrandTotal(dispatch, cart);


    }, [cart]);

    

    const checkoutHandler = async (amount) => {
        const imgeUrl = "https://instagram.fdel18-1.fna.fbcdn.net/v/t51.2885-19/365937399_204651238970650_5070733229755961349_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fdel18-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=GrTGo3w4hMIAX__-aod&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCeA7O5pDEefonB0O58Z_9u2-qDCRmp5DBu-0m75iUHAA&oe=6606472F&_nc_sid=8b3546";

        const { data: { key } } = await axios.get('http://localhost:5000/api/v1/paymets/getkey');

        const { data: { order } } = await axios.post('http://localhost:5000/api/v1/paymets/checkout', {
            amount
        });

        const options = {
            key, // Enter the Key ID generated from the Dashboard
            "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": "DecorTrove",
            "description": "Order Paymetgeteay ",
            "image": imgeUrl,
            "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "callback_url": "http://localhost:5000/api/v1/paymets/paymentverification",
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        };

        const razor = new window.Razorpay(options);
        razor.open();

    };

    return (
        <div>

            <form className="orderWindow">

                <div className="shippingDetails">
                    <div>
                        <h1>Shipping Details </h1>
                    </div>

                    <div className='useDetails'>

                        <table>

                            <tbody>


                                <tr>

                                    <td>
                                        <p>Name <span>*</span></p>
                                        <input type="text" required />
                                    </td>

                                </tr>

                                <tr>

                                    <td>
                                        <p>Phone No. <span>*</span></p>
                                        <input type="text" pattern="[0-9]{10}" title="Enter 10 digits (0-9) only" />

                                    </td>

                                </tr>

                                <tr>

                                    <td>
                                        <p>Alternate Phone No.</p>
                                        <input type="text" />
                                    </td>

                                </tr>

                                <tr>

                                    <td>
                                        <p>Address <span>*</span></p>
                                        <input type="text" />
                                    </td>

                                </tr>

                                <tr>

                                    <td>
                                        <p>Land Mark</p>
                                        <input type="text" />
                                    </td>

                                </tr>

                                <tr>

                                    <td>
                                        <p>City <span>*</span></p>
                                        <input type="text" />

                                    </td>

                                </tr>


                                <tr>

                                    <td>
                                        <p>State <span>*</span></p>
                                        <input type="text" />

                                    </td>

                                </tr>


                                <tr>

                                    <td>
                                        <p>Country <span>*</span></p>
                                        <input type="text" />
                                    </td>

                                </tr>
                            </tbody>


                        </table>

                    </div>

                </div>




                <div className="shoppingCart">

                    <div className="left">
                        <div>
                            <h1>Shopping Cart.</h1>
                        </div>

                        <div className="cartProducts">

                            <div className='cartHeader'>

                                <div>
                                    <p>Product</p>
                                </div>

                                <div>
                                    Price
                                </div>


                                <div>
                                    <p>Quantity</p>
                                </div>


                                <div>
                                    <p>Total Price</p>
                                </div>


                                <div>
                                    <p>Product</p>
                                </div>


                            </div>

                            <div className="cartList">
                                {
                                    productArray && productArray.map((i) => (
                                        <div className="productDetails" key={i._id}>

                                            <div className="product">

                                                <div className="img">
                                                    <img src={i.img[0].url} alt="" />
                                                </div>

                                                <div className="details">
                                                    <div>
                                                        <p>{i.name}</p>
                                                    </div>

                                                    <div>
                                                        <p>{i.desc}</p>
                                                    </div>
                                                </div>

                                            </div>

                                            <div className='productPrice'>
                                                <p> ₹{i.price}</p>
                                            </div>


                                            <div className='productQty'>

                                                <button type='button' onClick={() => updateQty(i, "minus")}>-</button>
                                                <span>{i.qty}</span>
                                                <button type='button' onClick={() => updateQty(i, "plus")}>+</button>

                                            </div>


                                            <div className='productTotalPrice'>
                                                <p>₹{i.qty * i.price}</p>
                                            </div>


                                            <div className='removeBtn'>
                                                <button type='button' onClick={() => removeProduct(i)}><MdDeleteForever /></button>
                                            </div>


                                        </div>

                                    ))
                                }

                            </div>


                            <div className="cartFooter">

                                <table>

                                    <tbody>

                                        <tr>
                                            <td>Subtotal : </td>
                                            <td>₹1000 </td>
                                        </tr>

                                        <tr>
                                            <td>Shipping : </td>
                                            <td>₹1000 </td>
                                        </tr>

                                        <tr>
                                            <td>Total : </td>
                                            <td>₹{orderGrandTotal} </td>
                                        </tr>
                                    </tbody>

                                </table>

                            </div>


                            <div className="paymentInfo">

                                <div>
                                    <h2>Payment Info.</h2>
                                </div>

                                <div >

                                    <div>
                                        <p>
                                            Paymetn Mehtod:
                                        </p>
                                    </div>


                                    <div className="selectMethod">
                                        <div>
                                            <input type="radio" name='paymetMethod' onClick={() => setIsCard(true)} defaultChecked={isCard} />
                                            <p>Credit Card/Debit Card  </p>
                                            <span><FaRegCreditCard /></span>
                                        </div>
                                        <div>
                                            <input type="radio" name='paymetMethod' onClick={() => setIsCard(false)} />
                                            <p>Cash on Delivery</p>
                                            <span><TfiDropboxAlt /></span>
                                        </div>
                                    </div>

                                    {
                                        isCard ?
                                            <div className="cardDetails">
                                                <div>
                                                    <label htmlFor="">Name on Card <span>*</span></label>
                                                    <input type="text" required />
                                                </div>

                                                <div>
                                                    <label htmlFor="">Card Number <span>*</span></label>
                                                    <div>
                                                        <input type="text" maxLength="4" required />
                                                        <input type="text" maxLength="4" required />
                                                        <input type="text" maxLength="4" required />
                                                        <input type="text" maxLength="4" required />

                                                    </div>
                                                </div>

                                                <div>
                                                    <label htmlFor="">Expiration Date <span>*</span></label>
                                                    <input type="date" required />
                                                </div>

                                                <div>
                                                    <label htmlFor="">CVV <span>*</span></label>
                                                    <input type="text" required />
                                                </div>

                                            </div>

                                            :

                                            " "

                                    }



                                    <div className='checkoutBtn'>
                                        <button type="button" onClick={() => checkoutHandler(200)}>{isCard ? "Pay Now " : "Order Now"}</button>

                                    </div>

                                </div>

                            </div>




                        </div>

                    </div>

                </div>




            </form>


        </div>
    );
};

export default Order;