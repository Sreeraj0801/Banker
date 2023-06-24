import axiosInstance from './axiosInstance';
// import axios from 'axios';
const authAPI = () => {
    const registrationAPI = async (details) => {
        try {
            const response = await axiosInstance.post('/', details);
            return response;
        } catch (error) {
            throw { error }
        }
    }

    return {
        registrationAPI
    }
}

export default authAPI;