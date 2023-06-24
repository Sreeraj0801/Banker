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
        console.log(error);
        throw { message: "User Registration failed" }
    }
}