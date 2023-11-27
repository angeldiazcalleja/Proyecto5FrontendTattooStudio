import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    credentials: {},
  },
  reducers: {
    userLogin: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    loginOut: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { userLogin, loginOut } = userSlice.actions;
export const userData = (state) => state.user;
export default userSlice.reducer;