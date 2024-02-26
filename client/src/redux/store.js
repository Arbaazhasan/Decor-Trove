import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./Reducer/adminReducer";
import userReducer from "./Reducer/userReducer";
import dashboard from "./Reducer/dashboard";
import productReducer from "./Reducer/productReducer";


const store = configureStore({

    reducer: {
        admin: adminReducer,
        user: userReducer,
        dashboard: dashboard,
        product: productReducer

    }

});

export const server = "http://localhost:5000/api/v1";

export default store;