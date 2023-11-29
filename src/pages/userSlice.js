import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
  },
  reducers: {
    userLogin: (state, action) => {
      state.token = action.payload.token;
    },
    
    logout: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { userLogin, logout } = userSlice.actions;
export const userData = (state) => state.user;
export default userSlice.reducer;



