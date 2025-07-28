import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    showSideBar: true,
}

const toggleSlice = createSlice({

    name: "sidebar",
    initialState,
    reducers: {
        toggleSideBar: (state, action) => {
            state.showSideBar = action.payload;
        }
    }
})

export const {toggleSideBar} = toggleSlice.actions;

export default toggleSlice.reducer;
