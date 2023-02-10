import axios from "axios";

const URL = "http://localhost:6000";

export const userRegister = async (userData) => {
  try {
    return await axios.post(`${URL}/register`, userData).then((res) => {
      return res.data;
    });
  } catch (e) {
    console.log("Error in registering the user ", e);
  }
};

export const loginUser = async (userData) => {
  try {
    return await axios.post(`${URL}/login`, userData).then((res) => {
      return res.data;
    });
  } catch (e) {
    console.log("Error in logging in the user ", e);
  }
};

export const getAccessToken = async (userData) => {
  try {
    let token = localStorage.getItem("ngageToken");
    return token;
  } catch (e) {
    console.log("Invalid Token", e);
  }
};
