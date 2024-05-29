import { Router } from "express"
// import { getWalletInfo } from "../../controllers/payments"
import { deposit } from '../../controllers/payments/MPESA/deposit'
import { withdraw, callback } from '../../controllers/payments/MPESA/withdraw'

import { getMpesaCredentials } from '../../controllers/payments/MPESA/credentials'
import { authenticateToken } from '../jwt'
import { addTransaction, getUserTransactions, getAllTransactions } from '../../controllers/payments/transactions'

const router: Router = Router()

router.get("/transactions", authenticateToken, getUserTransactions)
router.get("/transactions/global", authenticateToken, getAllTransactions)

router.post("/wallet/deposit", authenticateToken, getMpesaCredentials, deposit, addTransaction)
router.post("/wallet/withdraw", authenticateToken, getMpesaCredentials, withdraw, addTransaction)
// router.post("/wallet/info", authenticateToken, getWalletInfo)
router.post("/wallet/callback", callback)

export default router
