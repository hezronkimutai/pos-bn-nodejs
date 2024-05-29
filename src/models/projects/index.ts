import { IProject } from "../../types/projects"
import { model, Schema } from "mongoose"

const projectSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },

        description: {
            type: String,
            required: true,
        },

        link: {
            type: String,
            required: true,
            unique: true
        },
    },
    { timestamps: true }
)

export default model<IProject>("Project", projectSchema)
