import { ITransaction } from "../../types/transaction"
import { model, Schema } from "mongoose"

const transactionSchema: Schema = new Schema(
    {
        ammount: {
            type: String,
            required: true,
        },

        type: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        transactionId: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export default model<ITransaction>("Transaction", transactionSchema)
