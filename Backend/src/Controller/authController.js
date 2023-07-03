import { userRegister, userLogin } from '../Helper/authHelper.js'
import {generateAccessToken} from '../Authentication/JWT.js'

export const authController = async (req, res) => {
    try {
        const response = await userRegister(req.body)
        res.status(200).json(response)
    } catch (error) {
        res.status(401).json(error)
    }
}

export const loginController = async (req, res) => {
    try {
        const response = await userLogin(req.body);
        const token = await generateAccessToken(response._id);
        res.cookie('JWT_token', token);
        res.status(200).json(response);
    } catch (error) {
        res.status(401).json(error)
    }
}