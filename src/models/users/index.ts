import { IUser } from "./../../types/users"
import { model, Schema } from "mongoose"

const userSchema: Schema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },

        lastName: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true
        },
        role: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
)

export default model<IUser>("User", userSchema)
