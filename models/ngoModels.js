import { Schema } from "mongoose";

const ngoSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        address: {
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
        phonenumber: {
            type: String,
            required: true
        },
        donationTypeReceived: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
        donationQuantityReceived: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
    },
    {
        timestamps: true
    }
);
export const NGO = mongoose.model('NGO', ngoSchema);