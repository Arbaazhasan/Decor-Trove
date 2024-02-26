import axios from "axios";
import { getUserProfileFail, getUserProfileRequest, getUserProfileSuccess, isCartWindowClose, isCartWindowOpen, userLoginFail, userLoginRequest, userLoginSuccess, userLogoutFail, userLogoutRequest, userLogoutSuccess } from "../Reducer/userReducer";
import { server } from "../store";
import toast from "react-hot-toast";
import { getCartArray } from "./product";

export const userLogin = async (dispatch, username, password) => {

    try {

        dispatch(userLoginRequest());

        const { data } = await axios.post(`${server}/user/login`, {
            username, password
        }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });

        dispatch(userLoginSuccess());

        toast.success(data.message);

    } catch (error) {
        dispatch(userLoginFail(error.message));
        toast.error(error.response.data.message);
        console.log(error.response.data.message);


    }

};


export const userLogout = async (dispatch) => {

    try {
        dispatch(userLogoutRequest());

        const { data } = await axios.get(`${server}/user/logout`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true
        });

        dispatch(userLogoutSuccess());
        toast.success(data.message);

    } catch (error) {

        console.log(error.message);
        dispatch(userLogoutFail(error.response.data.message));
        toast.error(error.response.data.message);

    }

};


export const getUserProfile = async (dispatch) => {

    try {
        dispatch(getUserProfileRequest());

        const { data } = await axios.post(`${server}/user/getuser`, {

        }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch(getUserProfileSuccess(data.data));

        // console.log(data);


    } catch (error) {

        dispatch(getUserProfileFail(error.message));
        console.log(error);

    }
};

export const isCartMainWindow = (dispatch, val) => {

    dispatch(isCartWindowOpen(val));
    getCartArray(dispatch);

    console.log(val);

};


export const isCartMainWindowClose = (dispatch, val) => {

    dispatch(isCartWindowClose(val));

};