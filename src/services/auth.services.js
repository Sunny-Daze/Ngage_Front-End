import axios from "axios";
import { domain } from "./endPoints";


export const userRegister = async (userData) => {
  try {
    return await axios.post(`${domain}/register`, userData).then((res) => {
      return res.data;
    });
  } catch (e) {
    console.log("Error in registering the user ", e);
  }
};

export const loginUser = async (userData) => {
  try {
    return await axios.post(`${domain}/login`, userData).then((res) => {
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
