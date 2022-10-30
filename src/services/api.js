import axios from 'axios';

const URL = 'http://localhost:9000';

export const userRegister = async (userData) => {
    try {
        return await axios.post(`${URL}/register`, userData);
    } catch(e) {
        console.log("Error in registering the user ", e);
    }
} 