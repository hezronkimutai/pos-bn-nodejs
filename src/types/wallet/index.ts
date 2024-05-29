import { Document } from "mongoose"

export interface IWallet extends Document {
    committed: string
    unCommitted: string
    balance: string
    userId: string
    status: string
}
