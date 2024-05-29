import { Response, Request } from "express"
import { ITransaction } from "../../../types/transaction"
import Transaction from "../../../models/transactions"

export const getAllTransactions = async (req: Request, res: Response): Promise<void> => {
    try {
        const transactions: ITransaction[] = await Transaction.find()
        res.status(200).json({ transactions })
    } catch (error) {
        throw error
    }
}

export const getUserTransactions = async (req: Request, res: Response): Promise<void> => {
    try {
        const transactions: ITransaction[] = await Transaction.find()
        res.status(200).json({ transactions })
    } catch (error) {
        throw error
    }
}

const getTransactionInfo = async (req: Request, res: Response): Promise<void> => {
    try {
        const transactions: ITransaction[] = await Transaction.find()
        res.status(200).json({ transactions, totalAccountBalance: '', ucommittedAmmount: '', committedAmmount: '' })
    } catch (error) {
        throw error
    }
}

const addTransaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<ITransaction, "amount" | "type" | "userId">


        const transaction: ITransaction = new Transaction({
            amount: body.amount,
            type: body.type,
            userId: body.userId,
        })



        const newTransaction: ITransaction = await transaction.save()
        const allTransactions: ITransaction[] = await Transaction.find()

        res
            .status(201)
            .json({ message: "Transaction added", transaction: newTransaction, transactions: allTransactions })
    } catch (error) {
        throw error
    }
}

const updateTransaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateTransaction: ITransaction | null = await Transaction.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allTransactions: ITransaction[] = await Transaction.find()
        res.status(200).json({
            message: "Transaction updated",
            transaction: updateTransaction,
            transactions: allTransactions,
        })
    } catch (error) {
        throw error
    }
}

const deleteTransaction = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedTransaction: ITransaction | null = await Transaction.findByIdAndRemove(
            req.params.id
        )
        const allTransactions: ITransaction[] = await Transaction.find()
        res.status(200).json({
            message: "Transaction deleted",
            transaction: deletedTransaction,
            transactions: allTransactions,
        })
    } catch (error) {
        throw error
    }
}

export { addTransaction, updateTransaction, deleteTransaction }



