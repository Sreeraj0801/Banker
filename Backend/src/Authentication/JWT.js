import jwt from 'jsonwebtoken'


export const generateAccessToken = async (userId) => {
    try {
        process.env.JWT_TOKEN_SECRET = "$2a$10$UH6NmHZE1NiuuuhMgey1P.X92tBKzwKvVpjrnTPpyXkhWutLs.5tq"
        return await jwt.sign({ userId }, process.env.JWT_TOKEN_SECRET, { expiresIn: '2d' })
    } catch (error) {
        console.log("error from JWT auth", error);
        throw { error }
    }
}
