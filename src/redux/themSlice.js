import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dark: false,
    config: {
        name: "Light",
        bg: "#e3e3e3",
        bg_secondary: "#ffff",
        color: "#464646",
        buttons: "#000000",
        active: "#151515",
    },
};

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.dark = !state.dark;
            if (state.dark) {
                state.config = {
                    name: "Dark",
                    bg: "#181818",
                    bg_secondary: "#2d2d2d",
                    color: "#9E9C9F",
                    buttons: "#86f287",
                    active: "#ffff",
                };
            } else {
                state.config = {
                    name: "Light",
                    bg: "#e3e3e3",
                    bg_secondary: "#ffff",
                    color: "#464646",
                    buttons: "#000000",
                    active: "#151515",
                };
            }
        },
    },
});
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
