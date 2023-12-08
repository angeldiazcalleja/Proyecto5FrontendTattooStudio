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
      markAsDeletedLocally(appointmentId);
      await deleteAppointment(token, appointmentId);
      handleAppointmentList();
    } catch (error) {
      console.log(error);
    }
  };

  const markAsDeletedLocally = (appointmentId) => {
    // Actualiza el estado local para marcar la cita como eliminada
    setAllMyAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment._id === appointmentId
          ? { ...appointment, isDeleted: true }
          : appointment
      )
    );
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
        <p>Dates</p>
        <button type="submit" onClick={handleOpenModal}>
          Book Date
        </button>
      </div>
      <AppointmentModal
        open={modalOpen}
        handleClose={handleCloseModal}
        appointment={selectedAppointment}
        handleSaveChanges={handleSaveChanges}
      />
      {allMyAppointments ? (
        <div className="tableContainer">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Artist</th>
                <th>Date</th>
                <th>Star Time</th>
                <th>End Time</th>
                <th>Service</th>
                <th>Actions</th>
             
              </tr>
            </thead>
            <tbody>
              {allMyAppointments.map((e) => (
                <tr key={e._id} className={e.isDeleted ? "deletedRow" : ""}>
                  <td >{e._id}</td>
                  <td>{e.nameCustomer}</td>
                  <td>{e.nameTattooArtist}</td>
                  <td>{e.date}</td>
                  <td>{e.startTime}</td>
                  <td>{e.endTime}</td>
                  <td>{e.service}</td>
                  <td>
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => handleEdit(e)}
                      style={{ cursor: "pointer", marginRight: "10px" }}
                      disabled={e.isDeleted}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDelete(e._id)}
                      style={{ cursor: "pointer" }}
                      disabled={e.isDeleted}
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
