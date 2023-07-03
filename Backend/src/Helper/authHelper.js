import { userRegistration } from "../Model/auth.js";
import bcrypt from 'bcrypt';


export const userRegister = async (details) => {
    try {
        if (details.password && details.email) {
            details.password = await bcrypt.hash(details?.password, 10);
            return await userRegistration.create(details);
        } else {
            throw { message: "Need Credentials" }
        }
    } catch (error) {
        console.log("This is a error message from user Registration ", error);
        if (error.code === 11000) throw { message: 'Email already exist' }
        throw { message: "User Registration failed" }
    }
}

export const userLogin = async (details) => {
    try {
        if (!details.email && !details.password) {
            throw { message: "Required All credentials" }
        } else {
            const response = await userRegistration.findOne({ email: details.email });
            console.log(response);
            if (response) {
                const auth = await bcrypt.compare(details.password, response.password);
                if (!auth) {
                    throw { message: "Invalid Password" }
                } else {
                    return { _id: response._id, email: response.email }
                }
            } else {
                throw { message: "User doesnot exist" }
            }
        }
    } catch (error) {
        console.log("error from  userLogin",error);
        throw {error}
    }
}