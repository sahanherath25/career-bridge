import {configureStore} from "@reduxjs/toolkit";

import userSlice from "./features/users/userSlice.js";
import toggleSlice from "./features/toggle/toggleSlice.js";


const store=configureStore({
    reducer:{
        users:userSlice,
        toggle:toggleSlice
    }
})


export default store