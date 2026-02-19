import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true
    },
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        collapseSidebar: (state, payload) => {
            state.isMenuOpen = payload.payload;
        },
    },
});
export const {toggleMenu, collapseSidebar} = appSlice.actions;
export default appSlice.reducer;