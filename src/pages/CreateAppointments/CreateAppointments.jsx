import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAppointment } from "../../services/apiCalls"; 

const CreateAppointment = () => {
  // eslint-disable-next-line no-unused-vars
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    // Define los campos de tu formulario
    customerName: '',
    customerSurname: '',
    tattooArtistName: '',
    tattooArtistSurname: '',
    date: '',
    startTime: '',
    endTime: '',
    service: '',
    price: '',
    comments: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Llamada a la API para crear una cita
      const response = await createAppointment(formData);
      // Puedes manejar la respuesta de la API aquí, por ejemplo, mostrar un mensaje de éxito
      console.log('Cita creada con éxito:', response);
      // También puedes realizar alguna acción adicional, como recargar la lista de citas
      // dispatch(loadAppointments());
    } catch (error) {
      // Manejo de errores, puedes mostrar un mensaje de error o realizar otras acciones
      console.error('Error al crear la cita:', error);
    }
  };

  return (
    <div>
      <h2>Crear Nueva Cita</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields para cada propiedad de la cita */}
        <label htmlFor="customerName">Nombre del Cliente:</label>
        <input type="text" id="customerName" name="customerName" value={formData.customerName} onChange={handleInputChange} />

        <label htmlFor="customerSurname">Apellido del Cliente:</label>
        <input type="text" id="customerSurname" name="customerSurname" value={formData.customerSurname} onChange={handleInputChange} />

        <label htmlFor="tattooArtistName">Nombre del Artista:</label>
        <input type="text" id="tattooArtistName" name="tattooArtistName" value={formData.tattooArtistName} onChange={handleInputChange} />

        <label htmlFor="tattooArtistSurname">Apellido del Artista:</label>
        <input type="text" id="tattooArtistSurname" name="tattooArtistSurname" value={formData.tattooArtistSurname} onChange={handleInputChange} />

        <label htmlFor="date">Fecha:</label>
        <input type="text" id="date" name="date" value={formData.date} onChange={handleInputChange} />

        <label htmlFor="startTime">Hora de Inicio:</label>
        <input type="text" id="startTime" name="startTime" value={formData.startTime} onChange={handleInputChange} />

        <label htmlFor="endTime">Hora de Fin:</label>
        <input type="text" id="endTime" name="endTime" value={formData.endTime} onChange={handleInputChange} />

        <label htmlFor="service">Servicio:</label>
        <input type="text" id="service" name="service" value={formData.service} onChange={handleInputChange} />

        <label htmlFor="price">Precio:</label>
        <input type="text" id="price" name="price" value={formData.price} onChange={handleInputChange} />

        <label htmlFor="comments">Comentarios:</label>
        <input type="text" id="comments" name="comments" value={formData.comments} onChange={handleInputChange} />

        <button type="submit">Crear Cita</button>
      </form>
    </div>
  );
};

export default CreateAppointment;
