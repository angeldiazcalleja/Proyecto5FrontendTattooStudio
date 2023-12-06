/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  createAppointment,
  getAppointments,
} from "../../../services/apiCalls.js";
import { setAppointments } from "../../../pages/appointmentSlice.js";
import { userData } from "../../../pages/userSlice.js";
import { AppointmentForm } from "./AppointmentForm.jsx";


export const AppointmentModal = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const { token } = useSelector(userData);
  const [formData, setFormData] = useState({
    date: "",
    startTime: "",
    endTime: "",
    service: "",
    tattooArtistId: "",
    customerId: ""
  });
  

  const handleCreateAppointment = () => {
    console.log(formData, token, "VEAMOS A VER")
    createAppointment(formData, token)
      .then(
        getAppointments(token)
          .then((a) => dispatch(setAppointments(a)))
          .catch((error) => console.log(error))
      )
      .catch((error) => console.log(error));
    handleClose();
  };

  return (
    <div>
      <div open={open} onClose={handleClose}>
        <div >
          <p>
            Agendar nueva cita
          </p>
          <AppointmentForm formData={formData} setFormData={setFormData} />
          <button onClick={handleCreateAppointment}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};
