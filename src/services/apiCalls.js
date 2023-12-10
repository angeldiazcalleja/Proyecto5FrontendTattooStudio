import axios from "axios";

export const login = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/auth/login", data);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    throw error; 
  }
};

export const registerUser = async (data) => {
  try {
    const response = await axios.post("http://localhost:3000/users", data);
    return response;
  } catch (error) {
    console.error("Error during registration:", error);
    throw error; 
  }
};



export const getAllUsers = async (token, page) => {
  try {
    const response = await axios.get("http://localhost:3000/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
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

export const createAppointment = async (newAppointment, token) => {
  const result = await axios.post("http://localhost:3000/appointments", newAppointment, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};
 

export const getAppointments = async (token, page) => {
  const result = await axios.get("http://localhost:3000/appointments", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      page,
    },
  });
  return result.data;
};


export const modifyAppointment = async ( token, appointmentId, formData) => {
  const result = await axios.put("http://localhost:3000/appointments/" + appointmentId, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result;
};

export const deleteAppointment = async ( token, appointmentId) => {
  const result = await axios.delete("http://localhost:3000/appointments/" + appointmentId,  {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return result.data;
};