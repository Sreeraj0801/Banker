import {userRegister} from '../Helper/authHelper.js'
export const authController = async (req, res) => {
    try {
        const response = await userRegister(req.body)
        res.status(200).json(response)
    } catch (error) {
        res.status(402).json(error)
    }
}