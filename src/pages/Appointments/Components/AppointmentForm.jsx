/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { jwtDecode } from "jwt-decode";
import "./AppointmentForm.css";

export const AppointmentForm = ({ formData, setFormData, token, handleSaveChanges, appointment }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  const decodeToken = jwtDecode(token);
  const isAdmin = token.role;

  return (
    <>
      <div className="formDate">
        <span className="informationDate">
          <p>
            Please fill out the form if you would like to schedule an appointment
            with our staff.
          </p>
          <p>Depending on the design, a consultation may be necessary. </p>
          <p>
            To secure your appointment, a fee is required and can be paid either
            at the studio or through bank transfer.
          </p>
          <p>Details for the bank transfer are available upon request.</p>
        </span>
        <div className="lineForm"></div>
        <div className="formRow">
          <div className="formColumn">
            {isAdmin === "admin" ? (
              <div style={{ marginBottom: "20px" }}>
                <label className="labelForm" htmlFor="customerId">Id customer</label>
                <input
                  className="inputForm"
                  type="text"
                  id="customerId"
                  name="customerId"
                  onChange={handleInputChange}
                  required
                />
              </div>
            ) : (
              <>
                <label className="labelForm" htmlFor="customer">Customer</label>
                <select
                    className="inputForm"
                  id="customerId"
                  name="customerId"
                  value={formData.customerId}
                  onChange={handleInputChange}
                >
                  <option value="655a869ad757ff84ae8b7e71">Ikan Bettah</option>
                  <option value="655a8778d757ff84ae8b7e74">Sandra Black</option>
                  <option value="655a8791d757ff84ae8b7e77">George President</option>
                </select>
              </>
            )}
          </div>

          <div className="formColumn">
            <label className="labelForm" htmlFor="date">Date</label>
            <input
              className="inputForm"
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="formRow">
          <div className="formColumn">
            <label className="labelForm" htmlFor="startTime">Start Time</label>
            <input
              className="inputForm"
              type="datetime-local"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="formColumn">
            <label className="labelForm" htmlFor="endTime">End Time</label>
            <input
              className="inputForm"
              type="datetime-local"
              id="endTime"
              name="endTime"
              value={formData.endTime}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="formRow">
          <div className="formColumn">
            <label className="labelForm" htmlFor="service">Service</label>
            <select
              className="inputForm"
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
            >
              <option value="tattoo">Tattoo</option>
              <option value="piercing">Piercing</option>
              <option value="laserTattoo">Laser</option>
            </select>
          </div>

          <div className="formColumn">
            <label className="labelForm" htmlFor="tattooArtist">Artist</label>
            <select
              className="inputForm"
              id="tattooArtistId"
              name="tattooArtistId"
              value={formData.tattooArtistId}
              onChange={handleInputChange}
            >
              <option value="655a8946d757ff84ae8b7e85">Jessie Gin</option>
              <option value="655a896cd757ff84ae8b7e88">Mariah</option>
              <option value="655a898bd757ff84ae8b7e8b">Debora Swan</option>
            </select>
          </div>
        </div>
            <button className="buttonForm" onClick={handleSaveChanges}>
              {appointment ? "Save Changes" : "Send"}
            </button>
      </div>
    </>
  );
};

export default AppointmentForm;

