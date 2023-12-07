/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getAppointments, deleteAppointment } from "../../services/apiCalls.js";
import { useSelector } from "react-redux";
import { userData } from "../../pages/userSlice.js";
import { appointmentData } from "../../pages/appointmentSlice.js";
import { AppointmentModal } from "./Components/AppointmentModal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { jwtDecode } from "jwt-decode";


export const Appointments = () => {

  const { token } = useSelector(userData);
  const appointments = useSelector(appointmentData);
  const [modalOpen, setModalOpen] = useState(false);
  const [allMyAppointments, setAllMyAppointments] = useState([]);

  const decodeToken = jwtDecode(token);


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
  }, []);

  const handleEdit = (appointmentId) => {
    // Implementa la lógica para editar la cita con el ID proporcionado
    console.log(`Editando cita con ID: ${appointmentId}`);
  };

  const handleDelete = async (appointmentId) => {
      deleteAppointment( token, appointmentId)
      .then((a) => console.log(a)  
      )
      .catch((error) => console.log(error));
  };
  
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
                    <td>
                {/* Agrega los iconos a las celdas de acciones */}
                <FontAwesomeIcon
                  icon={faEdit}
                  onClick={() => handleEdit(e._id)}
                  style={{ cursor: 'pointer', marginRight: '10px' }}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => handleDelete(e._id)}
                  style={{ cursor: 'pointer' }}
                />
              </td>
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
