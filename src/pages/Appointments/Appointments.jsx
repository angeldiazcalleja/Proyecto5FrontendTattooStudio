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
import AppointmentModal from "./Components/AppointmentModal.jsx"; 
import Pagination from "../Pagination/Pagination.jsx"; 
import "./Appointments.css";

export const Appointments = () => {
  const { token } = useSelector(userData);
  const [modalOpen, setModalOpen] = useState(false);
  const [allMyAppointments, setAllMyAppointments] = useState([]);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalAppointments, setTotalAppointments] = useState(0);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => {
    setModalOpen(false);
    handleAppointmentList();
  };

  const handleAppointmentList = async (newPage = 1) => {
    try {
      const appointments = await getAppointments(token, newPage);
      setAllMyAppointments(appointments.appointments);
      setCurrentPage(newPage);
      setTotalAppointments(appointments.totalAppointments);
      setTotalPages(Math.ceil(appointments.totalAppointments / 10)); 
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

  const handlePageChange = (newPage) => {
    handleAppointmentList(newPage);
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
                  <td>{e._id}</td>
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <p>There are no appointments available</p>
      )}
    </div>
  );
};

export default Appointments;

