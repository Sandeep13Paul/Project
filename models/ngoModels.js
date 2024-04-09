import { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
        refreshToken: {
            type: String,
        }
    },
    {
        timestamps: true
    }
);

ngoSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }

    this.password = bcrypt.hash(this.password, 10);
    next();
})

ngoSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

ngoSchema.methods.generateAccessToken = function() {
    return jwt.sign(
        {
            username: this.username,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}

ngoSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
        {
            username: this.username,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
}
export const NGO = mongoose.model('NGO', ngoSchema);