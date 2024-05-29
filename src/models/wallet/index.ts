import { IWallet } from "../../types/wallet"
import { model, Schema } from "mongoose"

const walletSchema: Schema = new Schema(
    {
        committed: {
            type: String,
            required: true,
        },

        unCommitted: {
            type: String,
            required: true,
        },

        balance: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export default model<IWallet>("Wallet", walletSchema)
