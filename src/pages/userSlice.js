/* eslint-disable no-unused-vars */


import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    credentials: {},
    token: "",  
  },
  reducers: {
    userLogin: (state, action) => {
      return {
        ...state,
        credentials: action.payload.credentials,
        token: action.payload.token,  
      };
    },
    // eslint-disable-next-line no-unused-vars
    userLogout: (state, action) => {
      return {
        ...state,
        credentials: {},
        token: "", 
      };
    },
    
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export const userData = (state) => state.user;
export default userSlice.reducer;