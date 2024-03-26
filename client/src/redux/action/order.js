import axios from "axios";
import { server } from "../store";

export const orderhandler = async (amount, name, phoneNo, username, address) => {

    const logoImageUrl = "https://res-console.cloudinary.com/ddixq9qyw/media_explorer_thumbnails/291a5e1dbabe3dea1bdfccd85be4d430/detailed";

    const { data: { key } } = await axios.get(`${server}/paymets/getkey`);

    const { data: { order } } = await axios.post(`${server}/paymets/checkout`, {
        amount
    });

    const options = {
        key, // Enter the Key ID generated from the Dashboard
        "amount": order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Decor Trove",
        "description": "Order Payment Geteway",
        "image": logoImageUrl,
        "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": `${server}/paymets/paymentverification`,
        "prefill": {
            "name": name,
            "email": username,
            "contact": phoneNo
        },
        "notes": {
            "address": address
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    const razor = new window.Razorpay(options);
    razor.open();

};

export const userOrderDetails = async (
    userName,
    email,
    phoneNo1,
    phoneNo2,
    userAddress,
    landMark,
    city,
    state,
    country,
    productArray) => {

    const { data } = await axios.post(`${server}/order/userorderdetails`, {
        userName,
        email,
        phoneNo1,
        phoneNo2,
        userAddress,
        landMark,
        city,
        state,
        country,
        productArray

    }, {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true,
    });

    console.log(data);

};
