/* eslint-disable react/prop-types */
// import { useEffect, useLayoutEffect } from "react";

export const AppointmentForm = ({ formData, setFormData, token }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const isAdmin = token && token.role === 'admin';

  return (
    <>
     {isAdmin && (
        <div style={{ marginBottom: '20px' }}>
          <label htmlFor="customerId">Id customer:</label>
          <input
            type="text"
            id="customerId"
            name="customerId"
            onChange={handleInputChange}
            required
          />
        </div>
      )}

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="date">Fecha:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          required
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="startTime">Hora de inicio:</label>
        <input
          type="datetime-local"
          id="startTime"
          name="startTime"
          value={formData.startTime}
          onChange={handleInputChange}
          required
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="endTime">Hora de fin:</label>
        <input
          type="datetime-local"
          id="endTime"
          name="endTime"
          value={formData.endTime}
          onChange={handleInputChange}
          required
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="service">Service:</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleInputChange}
        >
          <option value="tattoo">Tatuaje</option>
          <option value="piercing">Piercing</option>
        </select>
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="tattooArtist">Tatuador:</label>
        <select
          id="tattooArtistId"
          name="tattooArtistId"
          value={formData.tattooArtistId}
          onChange={handleInputChange}
        >
          <option value="655a8946d757ff84ae8b7e85">X</option>
          <option value="655a896cd757ff84ae8b7e88">Y</option>
          <option value="655a898bd757ff84ae8b7e8b">Z</option>
        </select>
      </div>
    </>
  );
};

export default AppointmentForm;
