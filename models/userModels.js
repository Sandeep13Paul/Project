import { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        donationType: {
            type: String,
            required: [true, 'DonationType is required'],
        },
        quantity: {
            type: Number,
            required: [true, 'Quantity is required'],
        }
    },
    {
        timestamps: true
    }
);
export const User = mongoose.model('User', userSchema);