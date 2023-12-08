/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment, modifyAppointment, getAppointments } from "../../../services/apiCalls.js";
import { setAppointments } from "../../../pages/appointmentSlice.js";
import { userData } from "../../../pages/userSlice.js";
import { AppointmentForm } from "./AppointmentForm.jsx";
import "./AppointmentModal.css"

export const AppointmentModal = ({ open, handleClose, appointment }) => {
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

  useEffect(() => {
    if (appointment) {
      setFormData({
        date: appointment.date,
        startTime: appointment.startTime,
        endTime: appointment.endTime,
        service: appointment.service,
        tattooArtistId: appointment.tattooArtistId,
        customerId: appointment.customerId
      });
    }
  }, [appointment]);

  const handleSaveChanges = () => {

    if (appointment) {
      modifyAppointment(token, appointment._id, formData)
        .then(() => {
          handleClose();
          handleAppointmentList();
        })
        .catch((error) => console.log(error));
    } else {
      createAppointment(formData, token)
        .then(() => {
          handleClose();
          handleAppointmentList();
        })
        .catch((error) => console.log(error));
    }
  };

  const handleAppointmentList = async () => {
    try {
      const appointments = await getAppointments(token);
      dispatch(setAppointments(appointments.appointments));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="containerModal">
      <div open={open} onClose={handleClose}>
        <div>
          <p className="titleModal">{appointment ? "Edit Appointment" : "Book Now"}</p>
          <AppointmentForm formData={formData} setFormData={setFormData} token={token} handleSaveChanges={handleSaveChanges} appointment={appointment}/>
        </div>
      </div>
    </div>
  );
};


