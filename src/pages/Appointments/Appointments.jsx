/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { setAppointments } from "../../pages/appointmentSlice.js";
import { getAppointments } from "../../services/apiCalls.js";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../pages/userSlice.js";
import { appointmentData } from "../../pages/appointmentSlice.js";
// import { AppointmentTable } from "./Components/AppointmentTable.jsx";
import { AppointmentModal } from "./Components/AppointmentModal";

export const Appointments = () => {
  //   const dispatch = useDispatch();
  const { token } = useSelector(userData);
  const appointments = useSelector(appointmentData);
  const [modalOpen, setModalOpen] = useState(false);
  const [allMyAppointments, setAllMyAppointments] = useState([]);

  const handleOpenModal = () => setModalOpen(true);

  const handleCloseModal = () => {
    setModalOpen(false), handleAppointmentList();
  };

  const handleAppointmentList = async () => {
    try {
      //   const result = await getAppointments(token);
      //   console.log(result)
      getAppointments(token)
        .then((a) => {
          setAllMyAppointments(a.appointments);
        })
        .catch((e) => console.log(e));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAppointmentList();
    console.log(appointments);
  }, []);
  return (
    <div>
      <div>
        <p style={{ color: "#ad9859" }}>Citas</p>
        <button type="submit" onClick={handleOpenModal}>
          Pedir Cita
        </button>
      </div>
      <AppointmentModal open={modalOpen} handleClose={handleCloseModal} />
      {allMyAppointments ? (
        // <AppointmentTable appointments={appointments} />
        <div>
          {allMyAppointments.map((e) => {
            return(
            <div key={e._id}>
                <p >{e._id}</p>
                <p > DATE {e.date}</p>
                <p > START{e.startTime}</p>
                <p > END{e.endTime}</p>
                <p >SERVICE{e.service}</p>
                <p >TATTOOARTIST{e.tattooArtistId}</p>
            </div>
            )
          })}
        </div>
      ) : (
        <p>No hay citas</p>
      )}
    </div>
  );
};
