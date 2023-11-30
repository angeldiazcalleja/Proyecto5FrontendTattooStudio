// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     credentials: {},
//   },
//   reducers: {
//     userLogin: (state, action) => {
//       return {
//         ...state,
//         ...action.payload,
//       };
//     },
//     logout: (state, action) => {
//       return {
//         ...state,
//         ...action.payload,
//       };
//     },
//   },
// });

// export const { userLogin, logout } = userSlice.actions;
// export const userData = (state) => state.user;
// export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    credentials: {},
    token: "",  // Agrega el campo token al estado
  },
  reducers: {
    userLogin: (state, action) => {
      return {
        ...state,
        credentials: action.payload.credentials,
        token: action.payload.token,  // Almacena el token en el estado
      };
    },
    // eslint-disable-next-line no-unused-vars
    userLogout: (state, action) => {
      return {
        ...state,
        credentials: {},
        token: "",  // Limpia el token al hacer logout
      };
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;
export const userData = (state) => state.user;
export default userSlice.reducer;
