import {createSlice} from "@reduxjs/toolkit";

const initialState={
    firstName:"",
    lastName:"",
    token:""
}

const userSlice=createSlice({

    name: "users",
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.firstName=action.payload.firstName
        },
        addUserToken: (state, action) => {
            state.token=action.payload
        },
        showAlert(state, action) {
            state.isloading=true
        },
        hideAlert(state, action) {
            state.isloading=false
        }

    }
})


export const  {showAlert,hideAlert,loginUser,addUserToken}=userSlice.actions;

export default userSlice.reducer