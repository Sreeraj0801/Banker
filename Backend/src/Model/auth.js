import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        require: true
    },
})

export const userRegistration = mongoose.model('users', userSchema);