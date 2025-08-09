import { createSlice } from "@reduxjs/toolkit";


// Lead from localStorage
const storedUser = localStorage.getItem("dPsR_user") ? JSON.parse(localStorage.getItem("dPsR_user")) : null;

const initialState = {
    user: storedUser,
    isAuthenticated: !!storedUser
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        registerUser: (state, action)=>{
            state.user = action.payload;
            state.isAuthenticated = true;
            localStorage.setItem("dPsR_user", JSON.stringify(action.payload));
        },
        logoutUser:(state)=>{
            state.user = null;
            state.isAuthenticated = false;
            localStorage.removeItem("dPsR_user");
        },

        updateUser: (state, action)=>{
            state.user = {...state.user, ...action.payload};
            localStorage.setItem("dPsR_user", JSON.stringify(state.user));
        }
    },
});

export const {registerUser, logoutUser, updateUser} = userSlice.actions;
export default userSlice.reducer;