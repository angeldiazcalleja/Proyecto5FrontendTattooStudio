

import { createSlice } from "@reduxjs/toolkit";

export const appointmentsSlice = createSlice({
  name: "appointment",
  initialState: {
    credentials: {},
    idAppointment: "",  
  },
  reducers: {
    createAppointment: (state, action) => {
        state.credentials = action.payload.credentials;
        state.idAppointment = action.payload.idAppointment;
      },
      // eslint-disable-next-line no-unused-vars
      removeAppointment: (state, action) => {
        state.credentials = {};
        state.idAppointment = "";
      },
      
  },
});

export const { createAppointment, removeAppointment } = appointmentsSlice.actions;
export const appointmentDetails = (state) => state.appointment;
export default appointmentsSlice.reducer;

