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


export const getAppointments = async (endpoint, token) => {
  const mettingsUser = await axios.get(`${URL}${endpoint}`, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return mettingsUser;
};




export const updateUserProfile = async (token, data) => {
  try {
    const response = await axios.put("http://localhost:3000/users/profile", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error.response?.data || error.message);
    throw error;
  }
};


export const createAppointment = async (data, token) => {
  const headers = {
    Authorization: "Bearer " + token.credentials,
  };
  try {
  const response = await axios.post("http://localhost:3000/appointments", data, {headers});
       return response
  } catch (error) {
    console.error("Error al crear la cita", error)
    throw error
  }
}
 


