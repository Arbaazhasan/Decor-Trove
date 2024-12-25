import React from 'react';
import './order.scss';
import { MdDeleteForever } from "react-icons/md";
import { FaRegCreditCard } from "react-icons/fa6";
import { TfiDropboxAlt } from "react-icons/tfi";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { getGrandTotal, removeProductOrderList, updateProductQty } from '../../redux/action/cart';
import { CodOrder, orderhandler, userOrderDetails } from '../../redux/action/order';
import { Link } from 'react-router-dom';
import { getUserData } from '../../redux/action/userLogin';


const Order = () => {

    const dispatch = useDispatch();
    const { cart, orderGrandTotal } = useSelector(state => state.cart);
    const { user: { _id, name, phoneNo, username, address } } = useSelector(state => state.user);


    let [productArray, setProductArray] = useState([]);

    const [isCard, setIsCard] = useState(true);

    const [userName, setUserName] = useState("");
    const [phoneNo1, setPhoneNo1] = useState("");
    const [phoneNo2, setPhoneNo2] = useState("");
    const [userAddress, setUserAddress] = useState("");
    const [landMark, setLandMark] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");



    const updateQty = (product, operation) => {

        updateProductQty(dispatch, productArray, operation, product);

    };

    const removeProduct = (product) => {

        removeProductOrderList(dispatch, product, productArray);

    };

    const checkoutHandler = async (amount) => {



        orderhandler(dispatch, amount, name, phoneNo, username, address);
        orderDetailsHandler();

    };

    const orderDetailsHandler = () => {

        userOrderDetails(
            _id,
            userName,
            phoneNo1,
            phoneNo2,
            userAddress,
            landMark,
            city,
            state,
            country,
            productArray);

    };


    const userProfileDataHandler = () => {
        getUserData(dispatch);

    };

    const CODOrderHandler = () => {


        userOrderDetails(
            _id,
            userName,
            phoneNo1,
            phoneNo2,
            userAddress,
            landMark,
            city,
            state,
            country,
            productArray);

        CodOrder(dispatch);



    };


    useEffect(() => {

        const storedData = localStorage.getItem('localStorageCartArray');

        const retrievedData = JSON.parse(storedData);

        setProductArray(retrievedData);

        getGrandTotal(dispatch, retrievedData);

        // setProductArray(Array.from(cart));

        // getGrandTotal(dispatch, cart);

        userProfileDataHandler();
        // console.log(_id, name, phoneNo, username, address);



    }, [cart, _id, name, phoneNo, username, address
    ]);



    const [errors, setErrors] = useState({
        userName: "",
        phoneNo1: "",
        phoneNo2: "",
        userAddress: "",
        city: "",
        state: "",
        country: "",
    });

    // Handlers for real-time validation
    const handleUserNameChange = (e) => {
        const value = e.target.value;
        setUserName(value);
        if (!/^[A-Za-z\s]*$/.test(value)) {
            setErrors((prev) => ({
                ...prev,
                userName: "Please enter letters only.",
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                userName: "",
            }));
        }
    };

    const handlePhoneNo1Change = (e) => {
        const value = e.target.value;
        setPhoneNo1(value);
        if (!/^\d{0,10}$/.test(value)) {
            setErrors((prev) => ({
                ...prev,
                phoneNo1: "Please enter a valid 10-digit phone number.",
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                phoneNo1: "",
            }));
        }
    };

    const handlePhoneNo2Change = (e) => {
        const value = e.target.value;
        setPhoneNo2(value);
        if (value && !/^\d{0,10}$/.test(value)) {
            setErrors((prev) => ({
                ...prev,
                phoneNo2: "Please enter a valid 10-digit phone number.",
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                phoneNo2: "",
            }));
        }
    };

    const handleAddressChange = (e) => {
        setUserAddress(e.target.value);
        if (!e.target.value.trim()) {
            setErrors((prev) => ({
                ...prev,
                userAddress: "Address is required.",
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                userAddress: "",
            }));
        }
    };

    const handleCityChange = (e) => {
        const value = e.target.value;
        setCity(value);
        if (!/^[A-Za-z\s]*$/.test(value)) {
            setErrors((prev) => ({
                ...prev,
                city: "Please enter letters only.",
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                city: "",
            }));
        }
    };

    const handleStateChange = (e) => {
        const value = e.target.value;
        setState(value);
        if (!/^[A-Za-z\s]*$/.test(value)) {
            setErrors((prev) => ({
                ...prev,
                state: "Please enter letters only.",
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                state: "",
            }));
        }
    };

    const handleCountryChange = (e) => {
        const value = e.target.value;
        setCountry(value);
        if (!/^[A-Za-z\s]*$/.test(value)) {
            setErrors((prev) => ({
                ...prev,
                country: "Please enter letters only.",
            }));
        } else {
            setErrors((prev) => ({
                ...prev,
                country: "",
            }));
        }
    };



    return (
        <div>

            <form className="orderWindow">

                <div className="shippingDetails">
                    <div>
                        <h1>Shipping Details </h1>
                    </div>

                    <div className="useDetails">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <p>Name <span>*</span></p>
                                        <input
                                            type="text"
                                            value={userName}
                                            onChange={handleUserNameChange}
                                            maxLength={40}
                                        />
                                        {errors.userName && <span className="error">{errors.userName}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Phone No. <span>*</span></p>
                                        <input
                                            type="text"
                                            value={phoneNo1}
                                            onChange={handlePhoneNo1Change}
                                        />
                                        {errors.phoneNo1 && <span className="error">{errors.phoneNo1}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Alternate Phone No.</p>
                                        <input
                                            type="text"
                                            value={phoneNo2}
                                            onChange={handlePhoneNo2Change}
                                        />
                                        {errors.phoneNo2 && <span className="error">{errors.phoneNo2}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Address <span>*</span></p>
                                        <input
                                            type="text"
                                            value={userAddress}
                                            onChange={handleAddressChange}
                                            maxLength={60}
                                        />
                                        {errors.userAddress && <span className="error">{errors.userAddress}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Land Mark</p>
                                        <input
                                            type="text"
                                            value={landMark}
                                            onChange={(e) => setLandMark(e.target.value)}
                                            maxLength={60}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>City <span>*</span></p>
                                        <input
                                            type="text"
                                            value={city}
                                            onChange={handleCityChange}
                                            maxLength={60}
                                        />
                                        {errors.city && <span className="error">{errors.city}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>State <span>*</span></p>
                                        <input
                                            type="text"
                                            value={state}
                                            onChange={handleStateChange}
                                            maxLength={40}
                                        />
                                        {errors.state && <span className="error">{errors.state}</span>}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>Country <span>*</span></p>
                                        <input
                                            type="text"
                                            value={country}
                                            onChange={handleCountryChange}
                                            maxLength={40}
                                        />
                                        {errors.country && <span className="error">{errors.country}</span>}
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


                                    <div className='checkoutBtn'>

                                        {
                                            isCard ?

                                                <Link to="">
                                                    <button type="submit" onClick={() => isCard && checkoutHandler(orderGrandTotal)}>Pay Now</button>
                                                </Link>

                                                :

                                                <Link to={'/paymentsuccess?32423'}>
                                                    <button type="submit" onClick={() => CODOrderHandler()}>Order Now</button>
                                                </Link>
                                        }

                                    </div>

                                </div>

                            </div>




                        </div>

                    </div>

                </div>




            </form >


        </div >
    );
};

export default Order;