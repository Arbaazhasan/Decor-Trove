import React, { useState, useEffect } from 'react';
import './profile.scss';
import UserProfile from '../../components/UserProfile/UserProfile';
import ProfileWishlist from '../../components/ProfileWishlist/ProfileWishlist';
import ProfileCart from '../../components/ProfileCart/ProfileCart';
import ContactUs from '../ContactUs/ContactUs';
import { getUserProfile, userLogout } from '../../redux/action/userLogin';
import { useDispatch, useSelector } from 'react-redux';
import { getCartArray, getUserWishlistArray } from '../../redux/action/product';

const Profile = () => {

    const dispatch = useDispatch();
    const { userAuthenticated } = useSelector(state => state.user);

    const [tabs, setTab] = useState([true, false, false, false, false,]);

    const setTrue = (index) => {

        setTab((pre) => { return pre.map((tab, i) => (i == index ? true : false)); });

    };


    const onCLickHandler = () => {
        userLogout(dispatch);
    };

    const getUserProfileHandler = () => {

        getUserProfile(dispatch);


    };

    const wishlistHandler = () => {
        getUserWishlistArray(dispatch);
    };

    const cartHandler = () => {
        getCartArray(dispatch);
    };


    useEffect(() => {

    }, [userAuthenticated]);


    return (
        <div>

            <div className="userProfile">

                <div className="top">
                    <h2 onClick={() => setTrue(0)}>Profile</h2>
                    <h2 onClick={() => { cartHandler(); setTrue(1); }}>Cart</h2>
                    {/* <h2 onClick={() => setTrue(2)}>Orders</h2> */}
                    <h2 onClick={() => { setTrue(3); wishlistHandler(); }}>Wishlist</h2>
                    <h2 onClick={() => { setTrue(4); }}>Contact Us</h2>

                    <button onClick={onCLickHandler}>Logout</button>
                </div>

                <div className="bottom">

                    {tabs[0] && <UserProfile />}

                    {tabs[1] && <ProfileCart />}

                    {tabs[3] && <ProfileWishlist />}

                    {tabs[4] && <ContactUs />}


                </div>

            </div>

        </div>
    );
};

export default Profile;