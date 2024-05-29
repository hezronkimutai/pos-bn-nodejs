import { Response, Request } from "express"
import { IWallet } from "../../types/wallet"
import Wallet from "../../models/wallet"

const getWallets = async (req: Request, res: Response): Promise<void> => {
    try {
        const transactions: IWallet[] = await Wallet.find()
        res.status(200).json({ transactions })
    } catch (error) {
        throw error
    }
}

// export const getWalletInfo = async (req: any, res: Response): Promise<void> => {
//     try {
//         const transactions: IWallet | null = await Wallet.find({ userId: req?.user?.id })
//         res.status(200).json({ transactions, totalAccountBalance: '', ucommittedAmmount: '', committedAmmount: '' })
//     } catch (error) {
//         throw error
//     }
// }

const addWallet = async (req: Request, res: Response): Promise<void> => {
    try {
        const body = req.body as Pick<IWallet, "committed" | "unCommitted" | "userId">


        const transaction: IWallet = new Wallet({
            name: body.committed,
            description: body.unCommitted,
            link: body.userId,
        })


        const newWallet: IWallet = await transaction.save()
        const allWallets: IWallet[] = await Wallet.find()

        res
            .status(201)
            .json({ message: "Wallet added", transaction: newWallet, transactions: allWallets })
    } catch (error) {
        throw error
    }
}

const updateWallet = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            params: { id },
            body,
        } = req
        const updateWallet: IWallet | null = await Wallet.findByIdAndUpdate(
            { _id: id },
            body
        )
        const allWallets: IWallet[] = await Wallet.find()
        res.status(200).json({
            message: "Wallet updated",
            transaction: updateWallet,
            transactions: allWallets,
        })
    } catch (error) {
        throw error
    }
}

const deleteWallet = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedWallet: IWallet | null = await Wallet.findByIdAndRemove(
            req.params.id
        )
        const allWallets: IWallet[] = await Wallet.find()
        res.status(200).json({
            message: "Wallet deleted",
            transaction: deletedWallet,
            transactions: allWallets,
        })
    } catch (error) {
        throw error
    }
}

export { getWallets, addWallet, updateWallet, deleteWallet }



