/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getAppointments } from "../../services/apiCalls.js";
import { useSelector } from "react-redux";
import { userData } from "../../pages/userSlice.js";
import { appointmentData } from "../../pages/appointmentSlice.js";
import { AppointmentModal } from "./Components/AppointmentModal";

export const Appointments = () => {

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
        <div>
          return (
          <>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Fecha</th>
                  <th>Hora de inicio</th>
                  <th>Hora de fin</th>
                  <th>Servicio</th>
                  <th>Tatuador</th>
                </tr>
              </thead>
              <tbody>
                {allMyAppointments.map((e) => (
                  <tr key={e._id}>
                    <td>{e._id}</td>
                    <td>{e.date}</td>
                    <td>{e.startTime}</td>
                    <td>{e.endTime}</td>
                    <td>{e.service}</td>
                    <td>{e.tattooArtistId}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
          );
        </div>
      ) : (
        <p>No hay citas</p>
      )}
    </div>
  );
};
