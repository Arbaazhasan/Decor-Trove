import React from 'react';
import './order.scss';
import { MdDeleteForever } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { TfiDropboxAlt } from "react-icons/tfi";


const Order = () => {




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





                                <div className="productDetails">

                                    <div className="product">

                                        <div className="img">
                                            <img src="add1.jpg" alt="" />
                                        </div>

                                        <div className="details">
                                            <div>
                                                <p>Blue Berry </p>
                                            </div>

                                            <div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet, voluptates odit autem ullam quisquam praesentium vitae ex pariatur adipisci.</p>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='productQty'>

                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>

                                    </div>


                                    <div className='productTotalPrice'>
                                        <p>₹1000</p>
                                    </div>


                                    <div className='removeBtn'>
                                        <button><MdDeleteForever /></button>
                                    </div>


                                </div>






                                <div className="productDetails">

                                    <div className="product">

                                        <div className="img">
                                            <img src="add1.jpg" alt="" />
                                        </div>

                                        <div className="details">
                                            <div>
                                                <p>Blue Berry </p>
                                            </div>

                                            <div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet, voluptates odit autem ullam quisquam praesentium vitae ex pariatur adipisci.</p>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='productQty'>

                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>

                                    </div>


                                    <div className='productTotalPrice'>
                                        <p>₹1000</p>
                                    </div>


                                    <div className='removeBtn'>
                                        <button><MdDeleteForever /></button>
                                    </div>


                                </div>






                                <div className="productDetails">

                                    <div className="product">

                                        <div className="img">
                                            <img src="add1.jpg" alt="" />
                                        </div>

                                        <div className="details">
                                            <div>
                                                <p>Blue Berry </p>
                                            </div>

                                            <div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet, voluptates odit autem ullam quisquam praesentium vitae ex pariatur adipisci.</p>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='productQty'>

                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>

                                    </div>


                                    <div className='productTotalPrice'>
                                        <p>₹1000</p>
                                    </div>


                                    <div className='removeBtn'>
                                        <button><MdDeleteForever /></button>
                                    </div>


                                </div>






                                <div className="productDetails">

                                    <div className="product">

                                        <div className="img">
                                            <img src="add1.jpg" alt="" />
                                        </div>

                                        <div className="details">
                                            <div>
                                                <p>Blue Berry </p>
                                            </div>

                                            <div>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia eveniet, voluptates odit autem ullam quisquam praesentium vitae ex pariatur adipisci.</p>
                                            </div>
                                        </div>

                                    </div>


                                    <div className='productQty'>

                                        <button>-</button>
                                        <span>1</span>
                                        <button>+</button>

                                    </div>


                                    <div className='productTotalPrice'>
                                        <p>₹1000</p>
                                    </div>


                                    <div className='removeBtn'>
                                        <button><MdDeleteForever /></button>
                                    </div>


                                </div>




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
                                            <td>₹1000 </td>
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
                                            <input type="radio" name='paymetMethod' />
                                            <p>Credit Card/Debit Card  </p>
                                            <span><FaRegCreditCard /></span>
                                        </div>
                                        <div>
                                            <input type="radio" name='paymetMethod' />
                                            <p>Cash on Delivery</p>
                                            <span><TfiDropboxAlt /></span>
                                        </div>
                                    </div>

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

                                    <div className='checkoutBtn'>
                                        <button>Check Out</button>

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

export default Order;;;