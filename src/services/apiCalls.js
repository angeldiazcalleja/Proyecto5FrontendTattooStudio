import axios from "axios";

// const URL = "http://localhost:3000"
// export const login =  async (endpoint ,data) => {
//     console.log(data, "soy data")
//    return  axios.post(`${URL}${endpoint}`, data)
// }

export const login = async (data) => {
  console.log(data, "soy data");
  return axios.post("http://localhost:3000/auth/login", data
  );
};

export const registerUser =  async (data) => {
    console.log(data, "soy data")
   return  axios.post("http://localhost:3000/users", data )

   }

export const getProfile = (token) => {
  const configHeader = {
    headers: {
      authorization: "bearer " + token,
    },
  };
  axios.get(`${URL}profile`, configHeader);
};
