import axios from "axios";

export const login = async (data) => {
  try {
    console.log(data, "soy data");
    const response = await axios.post("http://localhost:3000/auth/login", data);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw error; 
  }
};

export const registerUser = async (data) => {
  try {
    console.log(data, "soy data");
    const response = await axios.post("http://localhost:3000/users", data);
    return response;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error; 
  }
};


export const userProfile = async (token, endpoint) => {
  try {
    const response = await axios.get(`http://localhost:3000/users/${endpoint}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al obtener el perfil:", error);
    throw error;
  }
};

// export const modifyProfileUser = async (updatedData, token) => {
//   const result = await axios.patch(`${userURL}/update-profile`, updatedData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return result;
// };


export const updateUserProfile = async (token, data) => {
  try {
    const response = await axios.put("http://localhost:3000/users/:_id", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};


// export const createAppointment = async (data, token) => {
//   console.log(data, "esto es data")
//   const headers = {
//     Authorization: `Bearer ${token}`,
//   };
//   try {
//   const response = await axios.post("http://localhost:3000/appointments", data, {headers});
//        return response
//   } catch (error) {
//     console.error("Error al crear la cita", error)
//     throw error
//   }
// }


export const createAppointment = async (newAppointment, token) => {
  const result = await axios.post("http://localhost:3000/appointments", newAppointment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
 

export const getAppointments = async (token) => {
  const result = await axios.get("http://localhost:3000/appointments", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};


export const deleteAppointment = async ( token, appointmentId) => {
  const result = await axios.delete("http://localhost:3000/appointments/" + appointmentId,  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};