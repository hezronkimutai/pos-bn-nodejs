import { Document } from "mongoose"

export interface ITransaction extends Document {
  amount: string
  type: string
  userId: string
  status: string
  transactionId: string
}
