/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

export const AppointmentTable = ({ appointments }) => {
    return (
        <div>
          <table style={{ minWidth: '600px', borderCollapse: 'collapse', margin: '20px auto' }}>
            <thead>
              <tr>
                <th style={{ fontSize: '18px', textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>FECHA</th>
                <th style={{ fontSize: '18px', textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>HORA INICIO</th>
                <th style={{ fontSize: '18px', textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>HORA FIN</th>
                <th style={{ fontSize: '18px', textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>INTERVENCIÓN</th>
                <th style={{ fontSize: '18px', textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>TATUADOR</th>
                <th style={{ fontSize: '18px', textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment._id}>
                  <td style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>
                    {new Date(appointment.date).toLocaleDateString()}
                  </td>
                  <td style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>{appointment.startTime}</td>
                  <td style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>{appointment.endTime}</td>
                  <td style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>
                    {appointment.intervention === 'tattoo' ? 'Tatuaje' : 'Piercing'}
                  </td>
                  <td style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>
                    {`${appointment.tattooArtist.name} ${appointment.tattooArtist.surname}`}
                  </td>
                  <td style={{ textAlign: 'center', padding: '10px', border: '1px solid #ddd' }}>
                    <span
                      style={{ marginRight: '5px', cursor: 'pointer', color: '#3498db' }}
                      onClick={() => handleEdit(appointment._id)}
                    >
                      Editar
                    </span>
                    <span
                      style={{ marginLeft: '5px', cursor: 'pointer', color: '#e74c3c' }}
                      onClick={() => handleDelete(appointment._id)}
                    >
                      Eliminar
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
};