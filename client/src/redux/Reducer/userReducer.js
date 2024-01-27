import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    status: "idel",
    userAuthenticated: false,
    loading: false,
    user: {},
    error: "idel",
    refresh: false,
};


export const userReducer = createSlice({
    name: "User Login",
    initialState,

    reducers: {

        // User Login

        userLoginRequest: (state, action) => {
            state.loading = true;
        },

        userLoginSuccess: (state, action) => {
            state.loading = false;
            state.userAuthenticated = true;
            state.user = action.payload;
        },

        userLoginFail: (state, action) => {
            state.status = false;
            state.loading = false;
            state.error = action.payload;
        },


        // User Logout

        userLogoutRequest: (state, action) => {
            state.loading = true;

        },
        userLogoutSuccess: (state, action) => {
            state.loading = false;
            state.userAuthenticated = false;
        },
        userLogoutFail: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }


    }
});

export const { userLoginRequest, userLoginSuccess, userLoginFail,
    userLogoutRequest, userLogoutSuccess, userLogoutFail

} = userReducer.actions;

export default userReducer.reducer;