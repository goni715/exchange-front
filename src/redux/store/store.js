import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "../features/api/apiSlice.js";
import authSliceReducer from "../features/auth/authSlice.js";
import userSliceReducer from "../features/user/userSlice.js";
import rateSliceReducer from "../features/rate/rateSlice.js";
import contactSliceReducer from "../features/contact/contactSlice.js";
import {modalSliceReducer} from "../features/modal/modalSlice.js";
import {accountSliceReducer} from "../features/account/accountSlice.js";


const store = configureStore({
    reducer: {
        [apiSlice.reducerPath] : apiSlice.reducer,
        auth: authSliceReducer,
        user: userSliceReducer,
        rate:rateSliceReducer,
        contact: contactSliceReducer,
        modal:modalSliceReducer,
        account:accountSliceReducer
    },
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware().concat(apiSlice.middleware)
})


export default store;