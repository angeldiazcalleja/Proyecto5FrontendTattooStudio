/* eslint-disable no-unused-vars */


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

// import { createSlice } from "@reduxjs/toolkit";

// export const userSlice = createSlice({
//   name: "user",
//   initialState: {
//     credentials: {},
//     token: "",
//   },
//   reducers: {
//     userLogin: (state, action) => {
//       return {
//         ...state,
//         credentials: action.payload.credentials,
//         token: action.payload.token,
//       };
//     },
//     // eslint-disable-next-line no-unused-vars
//     logout: (state, action) => {
//       return {
//         ...state,
//         credentials: {},
//         token: "",
//       };
//     },
//     userRegister: (state, action) => {
//       // Agregar lógica si es necesario
//       return state;
//     },
//   },
// });

// export const { userLogin, logout, userRegister } = userSlice.actions;
// export const userData = (state) => state.user;
// export default userSlice.reducer;
