/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  getAppointments,
  deleteAppointment,
  modifyAppointment,
} from "../../services/apiCalls.js";
import { useSelector } from "react-redux";
import { userData } from "../../pages/userSlice.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { AppointmentModal } from "./Components/AppointmentModal.jsx";
import "./Appointments.css"

export const Appointments = () => {
  const { token } = useSelector(userData);
  const [modalOpen, setModalOpen] = useState(false);
  const [allMyAppointments, setAllMyAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setModalOpen(false);
    handleAppointmentList();
  };

  const handleAppointmentList = async () => {
    try {
      const appointments = await getAppointments(token);
      setAllMyAppointments(appointments.appointments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleAppointmentList();
  }, []);

  const handleEdit = (appointmentId) => {
    setSelectedAppointment(appointmentId);
    handleOpenModal();
  };

  const handleDelete = async (appointmentId) => {
    try {
      await deleteAppointment(token, appointmentId);
      handleAppointmentList();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveChanges = async (appointmentId) => {
    modifyAppointment(token, appointmentId)
      .then((e) => handleCloseModal())
      .catch((error) => console.log(error));
    handleAppointmentList();
  };

  return (
    <div className="appointmentContainer">
      <div>
        <p>Citas</p>
        <button type="submit" onClick={handleOpenModal}>
          Pedir Cita
        </button>
      </div>
      <AppointmentModal
        open={modalOpen}
        handleClose={handleCloseModal}
        appointment={selectedAppointment}
        handleSaveChanges={handleSaveChanges}
      />
      {allMyAppointments ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Hora de inicio</th>
                <th>Hora de fin</th>
                <th>Servicio</th>
                <th>Tatuador</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {allMyAppointments.map((e) => (
                <tr key={e._id}>
                  <td>{e._id}</td>
                  <td>{e.date}</td>
                  <td>{e.startTime}</td>
                  <td>{e.endTime}</td>
                  <td>{e.customerId}</td>
                  <td>{e.service}</td>
                  <td>{e.tattooArtistId}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => handleEdit(e)}
                      style={{ cursor: "pointer", marginRight: "10px" }}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDelete(e._id)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No hay citas</p>
      )}
    </div>
  );
};
