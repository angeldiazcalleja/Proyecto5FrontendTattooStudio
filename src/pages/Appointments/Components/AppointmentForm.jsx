/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import { jwtDecode } from "jwt-decode";


export const AppointmentForm = ({ formData, setFormData, token }) => {

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
     {isAdmin === "admin" ? (
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
      ):(
        <>
        <label htmlFor="customer">Customer:</label>
        <select
        id="customerId"
        name="customerId"
        value={formData.customerId}
        onChange={handleInputChange}
      >
        <option value="655a869ad757ff84ae8b7e71">Ikan</option>
        <option value="655a8778d757ff84ae8b7e74">Sandra</option>
        <option value="655a8791d757ff84ae8b7e77">George</option>
      </select>
        </>
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
