import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Reducer/adminReducer";
import userReducer from "./Reducer/userReducer";
import dashboard from "./Reducer/dashboard";
import productReducer from "./Reducer/productReducer";
import cartReducer from "./Reducer/cartReducer";
import orderReducer from "./Reducer/orderReducer";


const store = configureStore({

    reducer: {
        admin: adminReducer,
        user: userReducer,
        dashboard: dashboard,
        product: productReducer,
        cart: cartReducer,
        orders: orderReducer,

    }

});

export const server = import.meta.env.VITE_SERVER_URL || "/api/v1";

export default store;