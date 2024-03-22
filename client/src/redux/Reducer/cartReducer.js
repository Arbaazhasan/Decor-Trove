import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    product: "done",
    cartTotal: 0,
    orderGrandTotal: 0,

};

export const cartReducer = createSlice({
    name: "CartReducer",
    initialState,

    reducers: {

        addProduct: (state, action) => {

            state.cart.push(action.payload);

            // state.cartTotal = state.cartTotal + action.payload.price * action.payload.qty;

        },

        removeProduct: (state, action) => {
            state.cart = state.cart.filter(product => product._id !== action.payload._id);

            // state.cartTotal = state.cartTotal - action.payload.price * action.payload.qty;

        },

        updateCartProudctQty: (state, action) => {
            state.cart = action.payload;

        },

        getCartProductTotal: (state, action) => {
            state.cartTotal = action.payload;

        },

        getOrderGrandTotal: (state, action) => {
            state.orderGrandTotal = action.payload;
        }



    }
});

export const { addProduct, removeProduct, updateCartProudctQty, getCartProductTotal, getOrderGrandTotal } = cartReducer.actions;


export default cartReducer.reducer;