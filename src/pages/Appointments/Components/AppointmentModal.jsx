// /* eslint-disable react/no-unknown-property */
// /* eslint-disable react/prop-types */
// import { useState } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import {
//   createAppointment,
//   getAppointments,
// } from "../../../services/apiCalls.js";
// import { setAppointments } from "../../../pages/appointmentSlice.js";
// import { userData } from "../../../pages/userSlice.js";
// import { AppointmentForm } from "./AppointmentForm.jsx";


// export const AppointmentModal = ({ open, handleClose }) => {
//   const dispatch = useDispatch();
//   const { token } = useSelector(userData);
//   const [formData, setFormData] = useState({
//     date: "",
//     startTime: "",
//     endTime: "",
//     service: "",
//     tattooArtistId: "",
//     customerId: ""
//   });
  

//   const handleCreateAppointment = () => {
//     createAppointment(formData, token)
//       .then(
//         getAppointments(token)
//           .then((a) => dispatch(setAppointments(a)))
//           .catch((error) => console.log(error))
//       )
//       .catch((error) => console.log(error));
//     handleClose();
//   };

//   return (
//     <div>
//       <div open={open} onClose={handleClose}>
//         <div >
//           <p>
//             Book Now
//           </p>
//           <AppointmentForm formData={formData} setFormData={setFormData} token={token} />
//           <button onClick={handleCreateAppointment}>
//             Send
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAppointment, modifyAppointment, getAppointments } from "../../../services/apiCalls.js";
import { setAppointments } from "../../../pages/appointmentSlice.js";
import { userData } from "../../../pages/userSlice.js";
import { AppointmentForm } from "./AppointmentForm.jsx";

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
      console.log(token, "1")
      console.log(appointment._id, "2")
      console.log(formData, "3")
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
    <div>
      <div open={open} onClose={handleClose}>
        <div>
          <p>{appointment ? "Editar cita" : "Agendar nueva cita"}</p>
          <AppointmentForm formData={formData} setFormData={setFormData} token={token} />
          <button onClick={handleSaveChanges}>
            {appointment ? "Guardar Cambios" : "Enviar"}
          </button>
        </div>
      </div>
    </div>
  );
};
