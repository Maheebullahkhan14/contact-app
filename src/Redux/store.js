import { configureStore } from '@reduxjs/toolkit';
import contactFormReducer from "../Redux/contactFormSlice";

const store  = configureStore({
    reducer : {
        contactForm : contactFormReducer
    }
})


export default store;