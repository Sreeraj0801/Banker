import axiosInstance from './axiosInstance';


// import axios from 'axios';
const authAPI = () => {
    const registrationAPI = async (details) => {
        try {
            return await axiosInstance.post('/', details);
        } catch (error) {
            throw { error }
        }
    }
    const loginAPI = async (details) => {
        try {
            return await axiosInstance.post('/login', details);
        } catch (error) {
            throw { error }
        }
    }

    return {
        registrationAPI,
        loginAPI
    }
}

export default authAPI;